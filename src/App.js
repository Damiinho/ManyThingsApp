import { BrowserRouter as Router } from "react-router-dom";

import "./App.scss";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_RL}>
        <Nav />
        <Main />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
