import s from "./Counter.module.css";

const Counter = () => {
  /**Пишемо handler для обробника події */
  const handlerResetClick = (name) => {
    console.log(`Hello ${name}!`);
  };
  // по замовчуванню приходить event
  const handlerPlusClick = (e) => {
    console.log("Plus was clicked");
    console.log(e); // обєкт події
  };

  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{1}</h1>
        <div className={s.flex}>
          {/* Навісимо обробник події на кнопки */}
          {/* анонімний колбек */}
          <button onClick={() => console.log("React is cool")} className="btn">
            minus
          </button>
          {/* Якщо функція приймає параметри, то потрібен callback,
          в такому випадку кнопка почекає, поки на неї натиснуть, і тільки тоді
          викличе функцію handlerResetClick */}
          <button onClick={() => handlerResetClick("Alex")} className="btn">
            reset
          </button>
          {/* посилання на функцію */}
          <button onClick={handlerPlusClick} className="btn">
            plus
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
