import axios from "axios";

export const fetchArticles = async () => {
  const reponse = await axios.get(
    "http://hn.algolia.com/api/v1/search?query=react"
  );
  return reponse.data;
};
