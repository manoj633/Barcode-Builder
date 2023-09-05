import "./App.css";
import React, { useState } from "react";

import InputScreen from "./screens/InputScreen";
import BarCodeScreen from "./screens/BarCodeScreen";

function App() {
  const [inputData, setInputData] = useState({});
  const handleDataEntered = (data) => {
    setInputData(data);
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <div className="form-container">
            <InputScreen onDataEntered={handleDataEntered} />
          </div>
          <div className="barcode-container">
            <BarCodeScreen barcodeData={inputData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
