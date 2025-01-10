// .jsx вказує на те, що у файлі є розмітка js.
// Все, що ми пишемо в App, перетворюється в розмітку
// і вставляється в root.

// Імпортуємо компоненти
import Header from "./components/Header/Header";
import WelcomeSection from "./components/WelcomeSection/WelcomeSection";
import { Footer } from "./components/Footer/Footer";
import Message from "./components/Message/Message";

const App = () => {
  const author = "Roman";
  const isOnline = false;
  const isLoading = true;
  const age = 18;

  return (
    <div>
      {/* Умовні рендери 
      Ні false, ні null, ні undefined не відмальовуються.
      Це корисно у моментах, коли треба щось показати*/}
      {isOnline && <h2>Online</h2>}
      {isLoading && <h2>Loading...</h2>}
      {age >= 18 ? <h2>Вітаю у клубі дорослих</h2> : <h2>Йди їж кашу!</h2>}

      {/* атрибути, які є у Message потрапляють 
      до props, як параметри. Назви атрибутів довільні. 
      Можна міняти контент компонента у моменті його 
      виклику (ініціалізаці)*/}
      <Message author={author} text="Продам холодильник" />
      <Message author="Petro" text="Продам шоколад" />
      <Message author="Марина" text="Продам плейстейшн" />
      <Header />
      <WelcomeSection />
      <Footer />
    </div>
  );
};

// App маємо експортувати
export default App;
