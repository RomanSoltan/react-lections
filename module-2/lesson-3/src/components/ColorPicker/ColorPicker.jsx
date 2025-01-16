import { useState } from "react";
import s from "./ColorPicker.module.css";
import colors from "../../assets/colors.json";

const ColorPicker = () => {
  /**якщо потрібна динаміка, то це 100% useState */
  const [currentColor, setCurrentColor] = useState("white");

  // функція, яка змінює state
  const handleChangeColor = (value) => {
    setCurrentColor(value);
  };

  return (
    // примінимо стилі до фону секції, який змінюється по кліку
    <section style={{ backgroundColor: currentColor }} className={s.bgWrapper}>
      <div className={s.pallette}>
        {/* виведемо натиснутий колір користувачу */}
        <h2>Current color: {currentColor}</h2>
        <ul className={s.list}>
          {colors.map((item) => (
            <li
              // навісимо оборбник події клік, який змінює колір фону
              onClick={() => handleChangeColor(item.color)}
              className={s.item}
              key={item.id}
            >
              {item.color}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ColorPicker;
