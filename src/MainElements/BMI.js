import { useState } from "react";
import "./BMI.scss";

const BMI = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [enterHeight, setEnterHeight] = useState("");
  const [enterWeight, setEnterWeight] = useState("");

  const handleHeight = (e) => {
    setHeight(e.target.value);
  };
  const handleWeight = (e) => {
    setWeight(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (height.length !== 0 && weight.length !== 0) {
      const newHeight = height / 100;
      setEnterHeight(newHeight);
      setEnterWeight(weight);
      setHeight("");
      setWeight("");
    } else {
      alert("uzupełnij wszystko");
    }
  };

  const handleReset = () => {
    setEnterHeight("");
    setEnterWeight("");
    setHeight("");
    setWeight("");
  };

  const result = (enterWeight / (enterHeight * enterHeight)).toFixed(2);

  const ResultDescription = () => {
    if (result < 16) {
      return <div>wygłodzenie</div>;
    }
    if (result >= 16 && result < 17) {
      return <div>wychudzenie</div>;
    }
    if (result >= 17 && result < 18.5) {
      return <div>niedowaga</div>;
    }
    if (result >= 18.5 && result < 25) {
      return <div>waga prawidłowa</div>;
    }
    if (result >= 25 && result < 30) {
      return <div>nadwaga</div>;
    }
    if (result >= 30 && result < 35) {
      return <div>otyłość (stopień I)</div>;
    }
    if (result >= 35 && result < 40) {
      return <div>otyłość (stopień II)</div>;
    }
    if (result >= 40) {
      return <div>otyłość (stopień III)</div>;
    }
  };

  const ResultPanel = () => {
    return (
      <>
        <div>
          Wynik (wzrost: {enterHeight} m, waga: {enterWeight} kg): {result}
        </div>
        <ResultDescription />
      </>
    );
  };

  const Formula = () => {
    return <div>Wzór na BMI: BMI =(masa ciała [kg])/(wzrost ^2 [m]) </div>;
  };

  const LegendPanel = () => (
    <div>
      Legenda:
      <ul>
        <li>poniżej 16 – wygłodzenie</li>
        <li>16 – 16.99 – wychudzenie</li>
        <li>17 – 18.49 – niedowaga</li>
        <li>18.5 – 24.99 – waga prawidłowa</li>
        <li>25.0 – 29.99 – nadwaga</li>
        <li>30.0 – 34.99 – otyłość (stopień I)</li>
        <li>35.0 – 39.99 – otyłość (stopień II)</li>
        <li>powyżej 40.0 – otyłość (stopień III)</li>
      </ul>
    </div>
  );

  return (
    <div className="app-main-bmi__container">
      <h1>Oblicz BMI</h1>
      <p>
        Strona pozwala na szybkie wyliczenie swojego BMI, po wpisaniu wyniku
        wyświetli się także kilka informacji
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input
              type="number"
              placeholder="wzrost"
              min={70}
              max={300}
              value={height}
              onChange={handleHeight}
            />{" "}
            cm
          </label>
        </div>
        <div>
          <label>
            <input
              type="number"
              placeholder="waga"
              min={30}
              max={600}
              value={weight}
              onChange={handleWeight}
            />{" "}
            kg
          </label>
        </div>
        <button onSubmit={handleSubmit}>Zatwierdź</button>
      </form>
      <button onClick={handleReset}>Reset</button>
      {enterHeight && <ResultPanel />}
      <Formula />
      <LegendPanel />
    </div>
  );
};

export default BMI;
