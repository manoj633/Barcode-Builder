import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

function InputScreen() {
  const [barcodeData, setBarcodeData] = useState("Sample Text");
  const [barCodeType, setBarCodeType] = useState("CODE128");
  const [showCaption, setShowCaption] = useState("Yes");
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
        <Form.Group controlId="barcodetype" className="my-3">
          <Form.Label>Select barcode type</Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => {
              setBarCodeType(e.target.value);
            }}
          >
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
        </Form.Group>
        <Form.Group controlId="barcodetype" className="my-3">
          <Form.Label>Show Caption</Form.Label>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
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
        <Button type="submit" variant="success" className="mt-2">
          Register
        </Button>
      </Form>
    </>
  );
}

export default InputScreen;
