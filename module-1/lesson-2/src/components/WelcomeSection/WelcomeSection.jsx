const WelcomeSection = () => {
  /* вбудовані стилі 
  1. погано маштабуються
  2. неможливо перебити
  3. - мобільна версія (ніякого адаптиву)
  4. немає псевдоелементів*/
  const titleStyles = {
    color: "gray",
    fontSize: 30,
    lineHeight: 1.1,
  };

  const textStyles = {
    color: "green",
    fontSize: 20,
    lineHeight: 1.5,
  };

  return (
    <section>
      {/* вбудовані стилі */}
      <h2 style={titleStyles}>Welcome to React!!!</h2>
      <p style={textStyles}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident et
        quaerat, architecto voluptatem repudiandae, veritatis commodi odit,
        praesentium veniam ducimus vitae eaque? Neque accusamus in, maiores
        itaque excepturi assumenda ratione?
      </p>
      <button>1</button>
      <button>2</button>
      <button>3</button>
    </section>
  );
};

export default WelcomeSection;
