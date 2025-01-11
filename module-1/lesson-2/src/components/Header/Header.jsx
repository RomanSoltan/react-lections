// Компонент - це функція,яка повертає шмат розмітки

const Header = () => {
  const mesage = "Hello world";

  return (
    <header>
      <div>{mesage}</div>
      <nav>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </nav>
    </header>
  );
};

// Header маємо експортувати в App
export default Header;
