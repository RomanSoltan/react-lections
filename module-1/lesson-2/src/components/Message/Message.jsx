// Шаблон, у якому динамічно піставляються значення,
// які ми отримуємо під час ініціалізації компонента

//                props деструктур
const Message = ({ author = "Unknown author", text }) => {
  return (
    <div>
      <h4>{author}</h4>
      <p>{text}</p>
    </div>
  );
};

export default Message;
