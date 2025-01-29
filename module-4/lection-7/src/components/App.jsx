import { useEffect } from "react";
import "./App.css";
import Header from "./Header/Header";
import { useState } from "react";
import { fetchArticles } from "../services/api";
import Articles from "./Articles/Articles";

function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // axios
    //   .get("http://hn.algolia.com/api/v1/search?query=react")
    //   .then((res) => setArticles(res.data.hits));
    const getData = async () => {
      try {
        setIsLoading(true);
        const { hits } = await fetchArticles();
        setArticles(hits);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <>
      <Header />
      <Articles articles={articles} />
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>Something wrong.. Sorry</h2>}
    </>
  );
}

export default App;
