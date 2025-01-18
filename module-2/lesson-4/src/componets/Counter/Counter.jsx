import { useEffect, useState } from "react";
import s from "./Counter.module.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  // Еффект спрацює лише після першого рендеру! І ВСЕ!
  // Використовується тоді, коли треба щось підвантажити
  // і не треба чекати від userа якихось дій (кліків)
  useEffect(() => {
    console.log("Компонент змонтовано!");
  }, []);

  // Ефект буде спрацьовувати перший раз після рендеру і всі
  // наступні рендери, коли змінився хоч один елемент залежностей
  // (add, delete, update)
  useEffect(() => {
    // коли потрібно, що ефект запускався за певної умови
    if (!counter) {
      return;
    }
    console.log("Лічильник було змінено:", counter);
    // if (counter > 5) {
    //   setCounter(0);
    // }
  }, [counter]);

  // Ефект буде спрацьовувати перший раз після рендеру,
  // і тоді коли ми міняємо крок
  useEffect(() => {
    console.log("Крок було змінено:", step);
  }, [step]);

  // Ефект буде працювати кожен раз, коли міняється хоч щось
  // з залежностей
  useEffect(() => {
    console.log("Або лічильник, або крок було змінено");
  }, [counter, step]);

  // Спрацьовує кожного разу коли щось змінюється(погана практика)
  useEffect(() => {
    console.log("Render");
    // 429 - too many request і заблокують по ip
  });

  const handleResetClick = () => {
    setCounter(0);
    setStep(1);
  };

  const handlePlusClick = () => {
    setCounter((prev) => prev + 1);
  };

  const handleMinusClick = () => {
    if (counter < 1) {
      return alert("STOP CLICKING BY MINUS");
    }
    setCounter((prev) => prev - 1);
  };

  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{counter}</h1>
        <input value={step} onChange={(e) => setStep(+e.target.value)} />
        <div className={s.flex}>
          <button className="btn" onClick={handleMinusClick}>
            minus
          </button>
          {/* Сховаємо кнопку reset якщо лічильник 0 */}
          {counter !== 0 && (
            <button className="btn" onClick={handleResetClick}>
              reset
            </button>
          )}
          <button className="btn" onClick={handlePlusClick}>
            plus
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
