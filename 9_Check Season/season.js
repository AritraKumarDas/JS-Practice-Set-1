
//9. Take user input. Check if the season is summer or winter based on the month. Consider Nov, Dec, Jan, Feb as winter and remaining as summer.

const userInput = prompt("Enter any month of the year:")

const month = userInput.trim().toLowerCase().slice(0, 3)
console.log(month)

switch (month) {
    case 'nov':
    case 'dec':
    case 'jan':
    case 'feb':
        console.log("It is WINTER");
        break;
    case 'mar':
    case 'apr':
    case 'may':
    case 'jun':
    case 'jul':
    case 'aug':
    case 'sep':
    case 'oct':
        console.log("It is SUMMER");
        break;
    default:
        console.log("Invalid Input")
}