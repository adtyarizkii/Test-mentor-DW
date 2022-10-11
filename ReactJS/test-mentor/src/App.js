import "./App.css";
import { useState } from "react";
// import UseState from "./pages/UseState";
// import Car from "./components/Car";
// import Motor from "./components/Motor";
import ConditionalRendering from "./pages/ConditionalRendering";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <ConditionalRendering isLogin={isLogin} setIsLogin={setIsLogin} />
      {/* <Car merk="BMW" year={2020} /> */}
      {/* <Motor merk="Ninja SS" year={2022} /> */}
      {/* <UseState /> */}
    </>
  );
}

export default App;
