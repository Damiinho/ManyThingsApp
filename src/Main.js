import { Route, Routes } from "react-router-dom";
import BMI from "./MainElements/BMI";
import Home from "./MainElements/Home";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bmi" element={<BMI />} />
    </Routes>
  );
};

export default Main;
