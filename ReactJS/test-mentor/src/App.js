import "./App.css";
import Car from "./components/Car";
import Motor from "./components/Motor";
// import UseState from "./pages/UseState";

function App() {
  return (
    <>
      <Car merk="BMW" year={2020} />
      <Motor merk="Ninja SS" year={2022} />
      {/* <UseState /> */}
    </>
  );
}

export default App;
