// Function to convert Celsius to Fahrenheit
function convertCelsiusToFahrenheit(celsius) {
  // Formula: (Celsius × 9/5) + 32 = Fahrenheit
  let fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}
// Driver code
let celsiusTemp = 32;
let fahrenheitTemp = convertCelsiusToFahrenheit(celsiusTemp);
console.log(`${celsiusTemp}°C is equal to ${fahrenheitTemp}°F`);
