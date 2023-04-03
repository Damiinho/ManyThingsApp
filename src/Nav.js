import { NavLink } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="app-main-nav">
      <ul>
        <li>
          <NavLink to="/">
            <p>Start</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/bmi">
            <p>BMI</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            <p>Kontakt</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="exit">
            <p>Exit</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
