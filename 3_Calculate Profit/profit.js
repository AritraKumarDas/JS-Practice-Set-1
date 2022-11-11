

// 3. Take buy price and sell price. Find if it was profit or loss.

const buyingPrice = +prompt("Enter your buying price:")
const sellingPrice = +prompt("Enter your selling price:")

const profit = sellingPrice - buyingPrice

if (profit > 0) {
    console.log("You have made a PROFIT of Rs", profit)
} else if (profit < 0) {
    console.log("You have made a LOSS of Rs", 0 - profit)
} else {
    console.log("No Profit/Loss incurred")
}