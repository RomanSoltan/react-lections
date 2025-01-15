import { useState } from "react";
import s from "./Counter.module.css";

/** Обмеження useState
 * 1. useState не можна викликати за межами компонента
 * 2. не можна викликати хуки всередині if
 * 3. не можна викликати хуки всередині return
 * 4. не можна викликати хуки всередині циклів...
 * 5. Хук має створюватися вгорі компонента
 */

const Counter = () => {
  const [counter, setCounter] = useState(100);

  const handleResetClick = () => {};

  const handlePlusClick = () => {
    console.log(counter);
    setCounter(counter + 1);
  };

  const handleMinusClick = () => {};

  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{counter}</h1>
        <div className={s.flex}>
          <button onClick={handleMinusClick} className="btn">
            minus
          </button>
          <button onClick={handleResetClick} className="btn">
            reset
          </button>
          <button onClick={handlePlusClick} className="btn">
            plus
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
