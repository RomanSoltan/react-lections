import Header from "./components/Header/Header";
import WelcomeSection from "./components/WelcomeSection/WelcomeSection";
import { Footer } from "./components/Footer/Footer";
import Message from "./components/Message/Message";
import List from "./components/List/List";
import Container from "./components/Container/Container";

import goodsData from "./db/goodsData.json";

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
  // const goodsData = [
  //   {
  //     id: 1,
  //     title: "Potato",
  //   },
  //   {
  //     id: 2,
  //     title: "Carrots",
  //   },
  //   {
  //     id: 3,
  //     title: "Iphone",
  //   },
  //   {
  //     id: 4,
  //     title: "TV",
  //   },
  // ];

  return (
    <div>
      <Container title="Movies section">
        <List title="movies" data={filmsData} />
      </Container>

      <Container title="Goods section">
        <List title="goods" data={goodsData} variant="bordered" />
      </Container>

      {isOnline && <h2>Online</h2>}
      {isLoading && <h2>Loading...</h2>}
      {age >= 18 ? <h2>Вітаю у клубі дорослих</h2> : <h2>Йди їж кашу!</h2>}

      <Message author={author} text="Продам холодильник" />
      <Message author="Petro" text="Продам шоколад" />
      <Message author="Марина" text="Продам плейстейшн" />
      <Header />
      <WelcomeSection />
      <Footer />
      <Footer variant="bordered" />
      <Footer variant="contrast" />
    </div>
  );
};

export default App;
