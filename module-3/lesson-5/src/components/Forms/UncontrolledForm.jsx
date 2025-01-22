const UncontrolledForm = ({ register }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const username = e.target.elements.username.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    register({ username, email, password });
    e.target.reset();
  };

  return (
    <div>
      <h2>Uncontrolled Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name:</span>
          <input type="text" placeholder="Enter your Name:" name="username" />
        </label>
        <label>
          <span>Email:</span>
          <input type="email" placeholder="Enter your Email:" name="email" />
        </label>
        <label>
          <span>Password:</span>
          <input
            type="password"
            placeholder="Enter your Password:"
            name="password"
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default UncontrolledForm;
