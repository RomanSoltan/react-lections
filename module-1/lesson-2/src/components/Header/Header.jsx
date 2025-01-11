// Підключення Header.css до Header.jsx
import "./Header.css";

const Header = () => {
  const message = "Hello world";

  return (
    <header>
      {/* Ванільний CSS
      У файлі з компонентом створити файл з розширенням .css,
      в якому записуються стилі. Назви класів в jsx пишуться в
      camalCase, задається атрибут className для тегу.
      Недолік ванільного CSS в тому, що всі класи є глобальними */}
      <h2 className="listTitle">{message}</h2>
      <nav>
        <ul className="list">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
