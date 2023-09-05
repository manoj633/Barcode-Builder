import { useBarcode } from "next-barcode";

function BarCodeScreen(props) {
  let text = props.barcodeData.text;
  let type = props.barcodeData.codetype;
  let caption = props.barcodeData.caption;
  console.log(text, type, caption);
  const { inputRef } = useBarcode({
    value: text,
    options: {
      format: type,
      displayValue: caption,
      background: "#ffffff",
    },
  });

  return (
    <>
      <img ref={inputRef} />
    </>
  );
}

BarCodeScreen.defaultProps = {
  barcodeData: {
    text: "sample text",
    caption: true,
    type: "CODE128",
  },
};
export default BarCodeScreen;
