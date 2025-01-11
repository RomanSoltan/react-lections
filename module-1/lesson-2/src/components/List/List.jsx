import clsx from "clsx";
// імпортуват модуля file_name.module.css
import css from "./List.module.css";

const List = ({ data, title, variant = "" }) => {
  // console.log("css:", css);

  return (
    <div
      /** Модульний css
       * 1. перейменувати файл у file_name.module.css
       * 2. імпортувати file_name.module.css у зміну,
       * яка буде обєктом
       * 3. використати у className ключі з цього обєкту,
       * щоб прописати стилі. Ключами будуть назви класів
       * з модульного файлу.
       */
      className={clsx(css.listWrapper, {
        [css[variant]]: variant,
      })}
    >
      <h2 className={css.listTitle}>My {title} list</h2>
      <ul className={css.list}>
        {data.map((item) => (
          <li key={item.id + item.title}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
