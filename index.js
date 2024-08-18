const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const Area = document.getElementById("Area");
const result = document.getElementById("result");
let temp;

function convert () {
  if (toFahrenheit.checked) {
    temp = Number(textBox.value);
    temp = 2 * temp;
    result.textContent = temp.toFixed(1) + 	"cm";
    setTimeout(() => {
      result.textContent = "";
    }, 2000);

  } else if (toCelsius.checked) {
    temp = Number(textBox.value);
    temp = 2 * Math.PI * temp;
    result.textContent = temp.toFixed(1) + 	"cm";
    setTimeout(() => {
      result.textContent = "";
    }, 2000);
  } else if (Area.checked) {
    temp = Number(textBox.value);
    temp = Math.PI * Math.pow(temp, 2);
    result.textContent = temp.toFixed(1) + 	"cm";
    setTimeout(() => {
      result.textContent = "";
    }, 2000);
  } 

  else {
    result.textContent = "Select a unit";
  }
}


