import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./InputScreen.css";

function InputScreen({ onDataEntered }) {
  const [barcodeData, setBarcodeData] = useState("Sample Text");
  const [barCodeType, setBarCodeType] = useState("CODE128");
  const [showCaption, setShowCaption] = useState("Yes");

  function submitHandler() {
    onDataEntered({
      text: barcodeData,
      codetype: barCodeType,
      caption: showCaption,
    });
  }

  // const handleDropdownChange = (event) => {
  //   setBarCodeType(event.target.value);
  // };

  return (
    <>
      <h2 className="title">Enter Barcode Details</h2>
      <Form>
        <Form.Group controlId="barcodedata">
          <Form.Control
            type="text"
            className="barcodeInput"
            onChange={(e) => {
              setBarcodeData(e.target.value);
            }}
            placeholder="Enter barcode text"
          ></Form.Control>
        </Form.Group>
        {/* <Form.Group controlId="barcodetype">
          <Form.Label>Select barcode type</Form.Label>
          <Form.Select value={barCodeType} onChange={handleDropdownChange}>
            <option value="CODE128">CODE128</option>
            <option value="CODE39">CODE39</option>
            <option value="EAN13">EAN13</option>
            <option value="UPC">UPC</option>
            <option value="EAN8">EAN8</option>
            <option value="EAN5">EAN5</option>
            <option value="EAN2">EAN2</option>
            <option value="MSI">MSI</option>
            <option value="pharmacode">Pharmacode</option>
          </Form.Select>
        </Form.Group> */}
        <Form.Group controlId="barcodetype" className="barcodeCaption">
          <Form.Label className="title caption">Show Caption</Form.Label>
          <div className="radiogroup">
            <div className="wrapper">
              <input
                className="state"
                type="radio"
                name="app"
                id="a"
                value="on"
                onChange={(e) => {
                  if (e.target.value === "on") {
                    setShowCaption(true);
                  }
                }}
              />
              <label className="label" htmlFor="a">
                <div className="indicator"></div>
                <span className="text">Yes</span>
              </label>
            </div>
            <div className="wrapper">
              <input
                className="state"
                type="radio"
                name="app"
                id="b"
                value="off"
                onChange={(e) => {
                  if (e.target.value === "off") {
                    setShowCaption(false);
                  }
                }}
              />
              <label className="label" htmlFor="b">
                <div className="indicator"></div>
                <span className="text">No</span>
              </label>
            </div>
          </div>
        </Form.Group>
        <Button
          type="button"
          variant="success"
          onClick={submitHandler}
          className="button-confirm"
        >
          Generate
        </Button>
      </Form>
    </>
  );
}

export default InputScreen;
