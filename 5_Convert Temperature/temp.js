

// 5. Convert fahrenheit to celsius and show result.

const fahrenhiteTemp = +prompt("Enter Fahrenhite Temperature:")

console.log("Temp: ", fahrenhiteTemp, " deg Fahrenhite")

const celsiusTemp = (fahrenhiteTemp - 32) * 5 / 9

console.log("Temperature converted:", celsiusTemp.toFixed(1), "deg Celcius")

