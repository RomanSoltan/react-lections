// .jsx вказує на те, що у файлі є розмітка js.
// Все, що ми пишемо в App, перетворюється в розмітку
// і вставляється в root.
// В App створюється структура, в компонентах логіка

// Імпортуємо компоненти
import Header from "./components/Header/Header";
import WelcomeSection from "./components/WelcomeSection/WelcomeSection";
import { Footer } from "./components/Footer/Footer";
import Message from "./components/Message/Message";
import List from "./components/List/List";

const App = () => {
  const author = "Roman";
  const isOnline = false;
  const isLoading = true;
  const age = 18;
  const filmsData = [
    {
      id: 1,
      title: "Terminator",
    },
    {
      id: 2,
      title: "GoT",
    },
    {
      id: 3,
      title: "Leon",
    },
    {
      id: 4,
      title: "Silo",
    },
  ];
  const goodsData = [
    {
      id: 1,
      title: "Potato",
    },
    {
      id: 2,
      title: "Carrots",
    },
    {
      id: 3,
      title: "Iphone",
    },
    {
      id: 4,
      title: "TV",
    },
  ];

  return (
    <div>
      <List title="movies" data={filmsData} />
      <List title="goods" data={goodsData} />

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
