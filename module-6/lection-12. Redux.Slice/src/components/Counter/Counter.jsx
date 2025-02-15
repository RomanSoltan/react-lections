import { useDispatch, useSelector } from "react-redux";
import s from "./Counter.module.css";
// 10. Використати нові функції в компонентах вже імпортуючи їх з слайса
import {
  decrement,
  increment,
  reset,
  changeStep,
} from "../../redux/counterSlice";

const Counter = () => {
  // фура(useSelector) їде на склад(state або store)
  // і витягне із зони каунтера counter
  const counter = useSelector((state) => state.counter.counter);
  const step = useSelector((state) => state.counter.step);

  // той хто керує процесом, як прораб. має доступ до store
  const dispatch = useDispatch();

  const handlePlusClick = () => {
    // dispatch дає команду, команда завжди обєкт
    dispatch(increment());
  };

  const handleMinusClick = () => {
    dispatch(decrement());
  };

  const handleResetClick = () => {
    dispatch(reset());
  };

  const handleChangeStep = (e) => {
    // коли dispatch має щось передавати використовуй payload
    // все, що потрапляє в аргумент ф-ї changeStep це payload
    dispatch(changeStep(+e.target.value));
  };

  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{counter}</h1>
        <input value={step} onChange={handleChangeStep} />
        <div className={s.flex}>
          <button className="btn" onClick={handleMinusClick}>
            minus
          </button>
          <button className="btn" onClick={handleResetClick}>
            reset
          </button>
          <button className="btn" onClick={handlePlusClick}>
            plus
          </button>
        </div>
      </div>
    </div>
  );
};
export default Counter;
