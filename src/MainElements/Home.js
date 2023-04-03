import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/">Start</Link>

      <Link to="/bmi">BMI</Link>

      <Link to="/contact">Kontakt</Link>

      <Link to="exit">Exit</Link>
    </div>
  );
};

export default Home;
