import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./BMI.scss";

const BMI = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [enterHeight, setEnterHeight] = useState("");
  const [enterWeight, setEnterWeight] = useState("");
  const [classNameForResult, setClassNameForResult] = useState("");
  const [isMoreInfo, setIsMoreInfo] = useState(false);
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

  const handleMoreInfo = () => {
    setIsMoreInfo(!isMoreInfo);
  };

  const MoreInfo = () => {
    return (
      <div onClick={handleMoreInfo} className="app-main-bmi__result-more">
        {isMoreInfo ? "(zwiń informacje)" : "(kliknij po więcej informacji)"}
      </div>
    );
  };

  const ResultDescription = () => {
    if (result < 16) {
      setClassNameForResult("bad");
      return (
        <>
          <div className="app-main-bmi__result-term">wygłodzenie</div>
          <MoreInfo />
        </>
      );
    }
    if (result >= 16 && result < 17) {
      setClassNameForResult("bad");
      return (
        <>
          <div className="app-main-bmi__result-term">wychudzenie</div>
          <MoreInfo />
        </>
      );
    }
    if (result >= 17 && result < 18.5) {
      setClassNameForResult("ok");
      return (
        <>
          <div className="app-main-bmi__result-term">niedowaga</div>
          <MoreInfo />
        </>
      );
    }
    if (result >= 18.5 && result < 25) {
      setClassNameForResult("good");
      return (
        <>
          <div className="app-main-bmi__result-term">waga prawidłowa</div>
          <MoreInfo />
        </>
      );
    }
    if (result >= 25 && result < 30) {
      setClassNameForResult("ok");
      return (
        <>
          <div className="app-main-bmi__result-term">nadwaga</div>
          <MoreInfo />
        </>
      );
    }
    if (result >= 30 && result < 35) {
      setClassNameForResult("bad");
      return (
        <>
          <div className="app-main-bmi__result-term">otyłość (stopień I)</div>
          <MoreInfo />
        </>
      );
    }
    if (result >= 35 && result < 40) {
      setClassNameForResult("bad");
      return (
        <>
          <div className="app-main-bmi__result-term">otyłość (stopień II)</div>
          <MoreInfo />
        </>
      );
    }
    if (result >= 40) {
      setClassNameForResult("bad");
      return (
        <>
          <div className="app-main-bmi__result-term">otyłość (stopień III)</div>
          <MoreInfo />
        </>
      );
    }
  };

  const ResultPanel = () => {
    return (
      <>
        <div className={`app-main-bmi__result ${classNameForResult}`}>
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
          <div className="app-main-bmi__result-details">
            Wzrost: {enterHeight} cm, waga: {enterWeight} kg
          </div>
          <ResultDescription />
        </div>
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
            <p>cm</p>
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
            <p>kg</p>
          </label>
        </div>
        <button onSubmit={handleSubmit}>Zatwierdź</button>
      </form>
      {enterHeight && <ResultPanel />}
      {isMoreInfo ? (
        <>
          <Formula />
          <LegendPanel />
        </>
      ) : null}
    </div>
  );
};

export default BMI;
