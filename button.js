function applyButton() {
  let bgColorInputElement = document.getElementById("bgColorInput").value;
  let fontColorInputElement = document.getElementById("fontColorInput").value;
  let fontSizeInputElement = document.getElementById("fontSizeInput").value;
  let fontWeightInputElement = document.getElementById("fontWeightInput").value;
  let paddingInputElement = document.getElementById("paddingInput").value;
  let borderRadiusInputElement =
    document.getElementById("borderRadiusInput").value;

  let customButtonElement = document.getElementById("customButton");

  customButtonElement.style.backgroundColor = bgColorInputElement;
  customButtonElement.style.color = fontColorInputElement;
  customButtonElement.style.fontSize = fontSizeInputElement;
  customButtonElement.style.fontWeight = fontWeightInputElement;
  customButtonElement.style.padding = paddingInputElement;
  customButtonElement.style.borderRadius = borderRadiusInputElement;
}
