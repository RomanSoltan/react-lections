const List = ({ data, title }) => {
  // const arr = [<li>hello</li>, 2, 3, 4];
  return (
    <div>
      <h2>My {title} list</h2>
      <ul>
        {/* <li>{data[0].title}</li>
        <li>{data[1].title}</li>
        <li>{data[2].title}</li> */}

        {/* Взяли масив, перебрали його і повернули 
        в це місце те, що було в масиві */}
        {/* {arr.map((item) => item)} */}
        {data.map((item) => (
          // потрібно написати ключ для батьківського
          // елемента, який рендериться. Ключ має бути
          // сталим, унікальним значенням. Не
          // використовувати генератор чисел. Також
          // значення ключа можна комбінувати.
          <li key={item.id + item.title}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
