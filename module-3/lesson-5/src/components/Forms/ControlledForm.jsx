import { useState } from "react";
import s from "./Forms.module.css";

const ControlledForm = ({ register }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    age: "",
    course: "",
    about: "",
    level: "junior",
    isAcceptedRules: false,
  });

  const { username, email, phone, age, course, about, level, isAcceptedRules } =
    formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted!");
    console.log(formData);
  };

  // DRY - don't repeat yourself
  // const handleChangeName = (e) => {
  //   setFormData((prev) => ({ ...prev, username: e.target.value }));
  // };
  // const handleChangeEmail = (e) => {
  //   setFormData((prev) => ({ ...prev, email: e.target.value }));
  // };
  // const handleChangePhone = (e) => {
  //   setFormData((prev) => ({ ...prev, phone: e.target.value }));
  // };

  // Створимо один обробник для запису Name, Email, Phone
  const handleChangeInput = (e) => {
    // Витягнемо деструктуризацією з e.target змінні name і value
    const { name, value, type } = e.target;
    // Для checkbox окрема потрібна перевірка
    if (type === "checkbox") {
      return setFormData((prev) => ({
        ...prev,
        [name]: !prev[name],
      }));
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  // бібліотеки дають можливість не робити RERENDER (перемальовка інтерфейса)
  console.log("RERENDER");

  return (
    <div className={s.formWrapper}>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          <span>Name:</span>
          <input
            className={s.input}
            type="text"
            name="username"
            onChange={handleChangeInput}
            value={username}
          />
        </label>
        <label className={s.label}>
          <span>Email:</span>
          <input
            className={s.input}
            type="email"
            name="email"
            onChange={handleChangeInput}
            value={email}
          />
        </label>
        <label className={s.label}>
          <span>Phone:</span>
          <input
            className={s.input}
            type="number"
            name="phone"
            onChange={handleChangeInput}
            value={phone}
          />
        </label>
        <label className={s.label}>
          <span>Age:</span>
          <input
            className={s.input}
            type="number"
            name="age"
            onChange={handleChangeInput}
            value={age}
          />
        </label>
        {/* select */}
        <label className={s.label}>
          <span>Course:</span>
          <select
            className={s.input}
            name="course"
            onChange={handleChangeInput}
            value={course}
          >
            <option value="backend">Backend</option>
            <option value="frontend">Frontend</option>
            <option value="devops">DevOps</option>
          </select>
        </label>
        <label className={s.label}>
          {/* textarea */}
          <span>About:</span>
          <textarea
            className={s.input}
            name="about"
            onChange={handleChangeInput}
            value={about}
          />
        </label>
        {/* radio-btn */}
        <div>
          <span>Level:</span>
          <label>
            <input
              checked={"junior" === level}
              onChange={handleChangeInput}
              type="radio"
              name="level"
              value="junior"
            />
            Junior
          </label>
          <label>
            <input
              checked={"middle" === level}
              onChange={handleChangeInput}
              type="radio"
              name="level"
              value="middle"
            />
            Middle
          </label>
          <label>
            <input
              checked={"senior" === level}
              onChange={handleChangeInput}
              type="radio"
              name="level"
              value="senior"
            />
            Senior
          </label>
          {/* checkbox */}
          <label>
            <input
              name="isAcceptedRules"
              checked={isAcceptedRules}
              onChange={handleChangeInput}
              type="checkbox"
            />
            I accept all rules!
          </label>
        </div>
        <button className={s.button}>Apply!</button>
      </form>
    </div>
  );
};

export default ControlledForm;
