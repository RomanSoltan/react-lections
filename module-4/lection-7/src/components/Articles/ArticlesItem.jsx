const ArticlesItem = ({ item }) => {
  return (
    <li>
      <a target="_blank" rel="noreferrer noopener" href={item.url}>
        {item.title}
      </a>
    </li>
  );
};
export default ArticlesItem;
