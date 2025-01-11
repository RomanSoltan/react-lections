// імпортуємо бібліотеку clsx
import clsx from "clsx";
import "./Footer.css";

// variant пропс в якому закладається назва класу
export const Footer = ({ variant = false }) => {
  return (
    /* Композиція класів
    створюється за допомогою бібліотеки clsx. Викликається clsx
    і в неї передається базові класи і обєкт, якому можна 
    передавати ключ (назва класу) і значення (умову), за якої
    буде визначено чи буде примінятися певний клас чи ні.
     */
    <footer
      className={clsx("footerWrapper", {
        [variant]: variant !== false,
      })}
    >
      <h2 className="footerTitle">Footer</h2>
      <ul className="listFooter">
        <li>A</li>
        <li>B</li>
        <li>C</li>
      </ul>
      <span>&copy; All right reserved 2025</span>
    </footer>
  );
};
