import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Start</NavLink>
        </li>
        <li>
          <NavLink to="/bmi">Oblicz BMI</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Kontakt</NavLink>
        </li>
        <li>
          <NavLink to="exit">Exit</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
