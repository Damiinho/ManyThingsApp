import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./BMI.scss";

const BMI = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [enterHeight, setEnterHeight] = useState("");
  const [enterWeight, setEnterWeight] = useState("");
  const navigate = useNavigate();
  const { height: urlHeight, weight: urlWeight } = useParams();

  useEffect(() => {
    if (urlHeight && urlWeight) {
      setEnterHeight(urlHeight);
      setEnterWeight(urlWeight);
    }
  }, [urlHeight, urlWeight]);

  const handleHeight = (e) => {
    setHeight(e.target.value);
  };
  const handleWeight = (e) => {
    setWeight(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (height.length !== 0 && weight.length !== 0) {
      setEnterHeight(height);
      setEnterWeight(weight);
      setHeight("");
      setWeight("");
      navigate(`/bmi/${height}/${weight}`);
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

  const result = (
    enterWeight /
    ((enterHeight / 100) * (enterHeight / 100))
  ).toFixed(2);

  let marginResult = 0;

  const functionForMarginResult = () => {
    if (result < 15) {
      return (marginResult = 0);
    }
    if (result > 15 && result < 35) {
      const resultForGraph = Math.round((result - 15) * 15);

      return (marginResult = resultForGraph);
    }
    if (result > 35) {
      return (marginResult = 300);
    }
  };
  functionForMarginResult();

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
        <div className="app-main-bmi__result">
          <div>
            <p>Twoje BMI:</p>
            <p>{result}</p>
          </div>
          <div className="app-main-bmi__result-graph">
            <div
              className="app-main-bmi__result-graph-dot"
              style={{ marginLeft: marginResult }}
            ></div>
          </div>
          <div>
            Wyliczono dla wzrostu {enterHeight} cm i wagi {enterWeight} kg
          </div>
        </div>
        <ResultDescription />
      </>
    );
  };

  const Formula = () => {
    return (
      <>
        <div>Wzór na BMI</div>
        <div>Wzór na BMI: BMI =(masa ciała [kg])/(wzrost ^2 [m]) </div>
      </>
    );
  };

  const LegendPanel = () => (
    <div>
      <p>Legenda:</p>
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
      <div className="app-main-bmi__title">
        <h1>Oblicz BMI</h1>
        <p>
          Strona pozwala na szybkie wyliczenie swojego BMI, po wpisaniu wyniku
          wyświetli się także kilka informacji
        </p>
      </div>
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
      {enterHeight && <ResultPanel />}
      <Formula />
      <LegendPanel />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default BMI;
