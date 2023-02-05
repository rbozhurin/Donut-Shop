import { Title, Button, Donut } from "../components";
import { UnicornDustDonut, TrueBloodDonut } from "../assets";

const StartScreen = () => {
  return (
    <div className="start-screen container">
      <Title
        content={[
          { text: "THE", classes: "fs-500 lh-100" },
          { text: "DONUT", classes: "fs-900 align-center" },
          { text: "SHOP", classes: "fs-900 align-center" },
        ]}
      />
      <Button text="Start" targetUrl={"/menu"} />
      <Donut
        donutImage={UnicornDustDonut}
        classes="decorative-donut start-screen__donut-1"
      />
      <Donut
        donutImage={TrueBloodDonut}
        classes="decorative-donut start-screen__donut-2"
      />
    </div>
  );
};

export default StartScreen;
