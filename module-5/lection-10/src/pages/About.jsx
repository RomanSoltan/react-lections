import { NavLink, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam,
        suscipit sapiente saepe tenetur placeat dolor iusto illo enim!
        Architecto recusandae iusto deserunt vitae tempore quaerat omnis
        laboriosam non commodi facere?
      </p>
      <nav className="nav">
        <NavLink to="aim">Aim</NavLink>
        <NavLink to="company">Company</NavLink>
        <NavLink to="team"> Team</NavLink>
      </nav>
      {/* Вказує де потрібно рендеритись компоненту, якщо 
      ви використовуєте вкладені Route y Route */}
      <section className="outlet">
        <Outlet />
      </section>
    </div>
  );
};
export default About;
