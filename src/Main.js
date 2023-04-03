import { Route, Routes } from "react-router-dom";
import BMI from "./MainElements/BMI";

const Main = () => {
  return (
    <Routes>
      <Route path="/bmi" element={<BMI />} />
    </Routes>
  );
};

export default Main;
