import { useState } from "react";
import s from "./Counter.module.css";
/** База про хуки
 *  1. Вони бувать різними
 *  2. Вони починаються з use
 *  3. Кожен працює по своєму
 *  4. Це функція
 */

const Counter = () => {
  /**хук useState використовується для того, щоб дати
   * вказівку на перемальовку інтерфейсу. useState це
   * функція, яку потрібно викликати, і вона нам повертає
   * масив, в якому завжди буде дві сутності. Перша сутність
   * це назва (counter), тобто те, що записано при виклику
   * функціїї useState , тобто 100, друга - це функція сеттер,
   * яка дозволяє робити зміни у першій сутності.
   * useState використовується замість змінної let.
   * Сеттер працює асинхронно.*/
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
