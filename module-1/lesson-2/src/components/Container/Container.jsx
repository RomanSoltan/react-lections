import css from "./Container.module.css";

/** У будь-якого React-компонента є пропс children, в який
 * потрапляє все, що знаходиться між відкриваючим і закриваючим
 * тегом компонента. У нашому випадку List знаходиться всередині
 * Container
 */
const Container = ({ children, title = "" }) => {
  return (
    <section className={css.container}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};

export default Container;
