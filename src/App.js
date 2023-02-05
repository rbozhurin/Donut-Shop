import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  StartScreen,
  MenuScreen,
  PaymentScreen,
  PreparationScreen,
  ReadyScreen,
} from "./screens";
import "./App.css";

function App() {
  const [selectedDonut, setSelectedDonut] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartScreen />} />
          <Route
            path="/menu"
            element={<MenuScreen setSelectedDonut={setSelectedDonut} />}
          />
          <Route path="/payment" element={<PaymentScreen />} />
          <Route
            path="/preparation"
            element={<PreparationScreen selectedDonut={selectedDonut} />}
          />
          <Route
            path="/ready"
            element={<ReadyScreen selectedDonut={selectedDonut} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
