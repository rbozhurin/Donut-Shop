import donutsData from "../data/donutsData";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Donut } from "../components";

const PreparationScreen = ({ selectedDonut }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/ready");
    }, 5000);
  }, [navigate]);

  return (
    <div className="preparation-screen container">
      <Donut
        donutImage={donutsData[selectedDonut].url}
        classes="preparation-screen__donut donut-rotate"
      />
      <p>Preparing...</p>
    </div>
  );
};

export default PreparationScreen;
