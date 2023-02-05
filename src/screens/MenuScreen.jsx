import donutsData from "../data/donutsData";
import { useNavigate } from "react-router-dom";
import { Title, Donut } from "../components";

const MenuScreen = ({ setSelectedDonut }) => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    setSelectedDonut(event.target.getAttribute("data-donut-id"));
    navigate("/payment");
  };

  const donutsList = donutsData.map((donut) => (
    <ul className="menu-screen__donuts-list-item" key={donut.id + 1}>
      <p className="menu-screen__donuts-list-title">{donut.name}</p>
      <Donut
        donutImage={donut.url}
        classes="menu-screen__donuts-list-donut donut-rotate"
        donutId={donut.id}
        handleClick={handleClick}
      />
    </ul>
  ));

  return (
    <div className="menu-screen container">
      <Title
        content={[
          { text: "THE", classes: "fs-500 lh-100" },
          { text: "MENU", classes: "fs-900" },
        ]}
      />
      <li className="menu-screen__donuts-list">{donutsList}</li>
    </div>
  );
};

export default MenuScreen;
