import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

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
      <h2>Enter Barcode Details</h2>
      <Form>
        <Form.Group controlId="barcodedata" className="my-3">
          <Form.Label>Enter barcode data</Form.Label>
          <Form.Control
            type="text"
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
        <Form.Group controlId="barcodetype">
          <Form.Label>Show Caption</Form.Label>
          {["radio"].map((type) => (
            <div key={`inline-${type}`}>
              <Form.Check
                className="radio-inline"
                label="yes"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
                onChange={(e) => {
                  if (e.target.value === "on") {
                    setShowCaption(true);
                  }
                }}
              />
              <Form.Check
                className="radio-inline"
                label="No"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
                onChange={(e) => {
                  if (e.target.value === "on") {
                    setShowCaption(false);
                  }
                }}
              />
            </div>
          ))}
        </Form.Group>
        <Button type="button" variant="success" onClick={submitHandler}>
          Generate
        </Button>
      </Form>
    </>
  );
}

export default InputScreen;
