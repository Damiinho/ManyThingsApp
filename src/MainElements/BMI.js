import { useState } from "react";

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

  const ResultPanel = () => {
    return (
      <div>
        Wynik (wzrost: {enterHeight} m, waga: {enterWeight} kg): {result}
      </div>
    );
  };

  const LegendPanel = () => (
    <div>
      Legenda:
      <ul>
        <li>poniżej 16 - wygłodzenie</li>
        <li> 16 - 16.99 - wychudzenie</li>
        <li> 17 - 18.49 - niedowaga</li>
        <li> 18.5 - 24.99 - waga prawidłowa</li>
        <li> 25.0 - 29.99 - nadwaga</li>
        <li> 30.0 - 34.99 - I stopień otyłości</li>
        <li> 35.0 - 39.99 - II stopień otyłości</li>
        <li> powyżej 40.0 - III stopień otyłości zwany otyłością skrajną.</li>
      </ul>
    </div>
  );

  const result = (enterWeight / (enterHeight * enterHeight)).toFixed(2);

  return (
    <div>
      Oblicz BMI:
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Wprowadź wzrost:{" "}
            <input
              type="number"
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
            Wprowadź wagę:{" "}
            <input
              type="number"
              min={30}
              max={600}
              value={weight}
              onChange={handleWeight}
            />{" "}
            kg
          </label>
        </div>
        <button>Zatwierdź</button>
        <button onClick={handleReset}>Reset</button>
        {enterHeight && <ResultPanel />}
        <div>Wzór na BMI: BMI =(masa ciała [kg])/(wzrost ^2 [m]) </div>
        <LegendPanel />
      </form>
    </div>
  );
};

export default BMI;
