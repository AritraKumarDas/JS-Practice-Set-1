

// 10. Find the electricity bill of a person based on the unit. Prices of the first 80 units are 1rs/unit, NEXT 80 units are 2rs/unit, NEXT units cost 4rs/unit.

const units = +prompt("Enter the number of units consumed:");

var bill;

if (units >= 0 && units <= 80) {
    bill = units;
} else if (units > 80 && units <= 160) {
    bill = 80 + (units - 80) * 2;
} else {
    bill = 80 + (80 * 2) + (units - 160) * 4
}

console.log("Units consumed: " + units)
console.log("Your Electricity Bill is Rs " + bill)