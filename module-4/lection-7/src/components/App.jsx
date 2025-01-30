import { useEffect } from "react";
import "./App.css";
import Header from "./Header/Header";
import { useState } from "react";
import { fetchArticles } from "../services/api";
import Articles from "./Articles/Articles";
import SearchBar from "./SearchBar";
import toast from "react-hot-toast";

function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  // скільки по замовчуванню відмалюється значень
  const [perPage, setPerPage] = useState(20);

  useEffect(() => {
    if (!query) return;
    // axios
    //   .get("http://hn.algolia.com/api/v1/search?query=react")
    //   .then((res) => setArticles(res.data.hits));
    const getData = async () => {
      try {
        setIsLoading(true);
        const { hits } = await fetchArticles(query, page, perPage);
        // розсипаємо попередні запити і додаємо до них нові запити
        setArticles((prev) => [...prev, ...hits]);
      } catch {
        toast.error("Server is dead!");
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page, perPage]);

  const handleSetQuery = (newQuery) => {
    console.log(newQuery);
    setQuery(newQuery);
    // логіка скидання запитів при новому запиті
    setArticles([]);
    // скидання до першої сторінки
    setPage(0);
  };

  const handleReset = () => {
    setArticles([]);
    // скидання до першої сторінки
    setPage(0);
    toast.success(`All filters and pages drop to init values`);
  };

  const handleChangeLimit = (e) => {
    setArticles([]);
    setPerPage(e.target.value);
    toast.success(`You change visibility filter to ${e.target.value}`);
  };

  return (
    <>
      <Header />
      <SearchBar handleSetQuery={handleSetQuery} reset={handleReset} />
      <select value={perPage} onChange={handleChangeLimit}>
        <option value={9}>9</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
      </select>
      <Articles articles={articles} />
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>Something wrong.. Sorry</h2>}
      <button onClick={() => setPage((prev) => prev + 1)}>Load more</button>
    </>
  );
}

export default App;
