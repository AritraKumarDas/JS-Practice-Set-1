


// 1. Get user input as number in fahrenheit.Check if the user has a fever. 

const tempInFahrenhite = prompt("Enter your body temperature in Fahrenhite:")
console.log("Your Temperature: " + tempInFahrenhite + " deg Fahrenhite")

if (tempInFahrenhite > 98.6) {
    console.log("You seem to have a fever!")

} else if (tempInFahrenhite < 96) {
    console.log("Your body is getting cold.")

} else {
    console.log("Great, No fever!")
}



