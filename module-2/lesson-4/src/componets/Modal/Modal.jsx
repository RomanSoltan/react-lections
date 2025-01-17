import { useEffect } from "react";
import s from "./Modal.module.css";

const Modal = ({ children, title = "Default modal", closeModal }) => {
  // Реалізуємо закриття модалки по бекдропу
  const handleBackdropClick = (e) => {
    // для того щоб не закривалася модалка, коли по ній клікають
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Реалізуємо закриття по esc
  useEffect(() => {
    const handleKeyDown = (e) => {
      console.log(e.key);
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Видалення слухача з документа після закриття модалки,
    // щоб уникнути витоку памяті
    return () => {
      console.log("Мене закрили");
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  return (
    <div className={s.wrapper} onClick={handleBackdropClick}>
      <div className={s.content}>
        <>
          <h1>{title}</h1>
          <hr />
        </>
        <button onClick={closeModal} className={s.closeBtn}>
          x
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
