import { Title, Button, Donut } from "../components";
import {
  ApplePay,
  GooglePay,
  SkyShapedDonut,
  UnicornDustDonut,
} from "../assets";

const PaymentScreen = () => {
  return (
    <div className="payment-screen container">
      <Title
        content={[
          { text: "You can", classes: "fs-600 lh-600" },
          { text: "PAY US", classes: "fs-500 lh-100" },
          { text: "NOW", classes: "fs-900" },
        ]}
      />
      <div className="button-group">
        <Button
          image={ApplePay}
          alt="apple pay logo"
          targetUrl="/preparation"
        />
        <Button
          image={GooglePay}
          alt="google pay logo"
          targetUrl="/preparation"
        />
      </div>
      <Donut
        donutImage={SkyShapedDonut}
        classes="decorative-donut payment-screen__donut-1"
      />
      <Donut
        donutImage={UnicornDustDonut}
        classes="decorative-donut payment-screen__donut-2"
      />
    </div>
  );
};

export default PaymentScreen;
