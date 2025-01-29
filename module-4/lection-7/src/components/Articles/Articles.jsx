import ArticlesItem from "./ArticlesItem";

const Articles = ({ articles }) => {
  return (
    <ul>
      {articles.map((item) => (
        <ArticlesItem key={item.objectID} item={item} />
      ))}
    </ul>
  );
};
export default Articles;
