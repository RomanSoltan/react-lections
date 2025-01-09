// .jsx вказує на те, що у файлі є розмітка js.
// Все, що ми пишемо в App, перетворюється в розмітку
// і вставляється в root.

const App = () => {
  return (
    <div>
      <header>
        <div>logo</div>
        <nav>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </nav>
      </header>

      <section>
        <h2>Welcome to React!!!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident et
          quaerat, architecto voluptatem repudiandae, veritatis commodi odit,
          praesentium veniam ducimus vitae eaque? Neque accusamus in, maiores
          itaque excepturi assumenda ratione? Blanditiis, hic eum officia libero
          repudiandae, facere velit odit obcaecati odio laudantium laborum non
          quaerat, quas veritatis cupiditate debitis explicabo quidem sit
          nesciunt fuga. Modi sit magnam reiciendis a eos!
        </p>
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </section>

      <footer>
        <span>&copy; All right reserved 2025</span>
      </footer>
    </div>
  );
};

// App маємо експортувати
export default App;
