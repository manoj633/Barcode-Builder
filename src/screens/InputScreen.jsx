import React, { useState, useEffect } from "react";
import { Form, FormCheck } from "react-bootstrap";

function InputScreen() {
  const [barcodeData, setBarcodeData] = useState("Sample Text");
  const [barCodeType, setBarCodeType] = useState("CODE128");
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
          <Form.Select aria-label="Default select example">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
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
              />
              <Form.Check
                className="radio-inline"
                label="No"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
              />
            </div>
          ))}
        </Form.Group>
        {/* <Button
          type="submit"
          variant="primary"
          className="mt-2"
          disabled={isLoading}
        >
          Register
        </Button>
        {isLoading && <Loader />} */}
      </Form>
    </>
  );
}

export default InputScreen;
