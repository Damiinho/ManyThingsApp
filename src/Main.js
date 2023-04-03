import { Route, Routes } from "react-router-dom";
import BMI from "./MainElements/BMI";
import Home from "./MainElements/Home";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route exact path="/bmi" element={<BMI />} />
      <Route path="/bmi/:height/:weight" element={<BMI />} />
    </Routes>
  );
};

export default Main;
