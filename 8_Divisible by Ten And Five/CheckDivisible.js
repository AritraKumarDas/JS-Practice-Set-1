

// 8. Check if a given number is divisible by 10. Check if the number is divisible by both 10 and 5.

const num = +prompt("Enter any number:")


if (num % 10 === 0) {
    if (num % 5 === 0) {
        console.log(num + " is divisible by both 10 & 5")
    } else {
        console.log(num + " is divisible by 10 only")
    }
} else if (num % 5 === 0) {
    console.log(num + " is divisible by 5 only")
} else {
    console.log(num + " is neither divisible by 10 or 5.")
}

