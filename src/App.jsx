import "./App.css";
import InputScreen from "./screens/InputScreen";
import BarCodeScreen from "./screens/BarCodeScreen";

function App() {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="form-container">
            <InputScreen />
          </div>
          <div className="barcode-container">
            <BarCodeScreen />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
