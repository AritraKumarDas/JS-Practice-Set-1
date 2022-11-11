


// 2. Take user inputs for 3 angles of a triangle.Validate if it is a valid triangle.

const firstAngle = +prompt("Enter the First Angle of a triangle:")
const secondAngle = +prompt("Enter the Second Angle of a triangle:")
const thirdAngle = +prompt("Enter the Third Angle of a triangle:")

console.log("Angles entered are: ", firstAngle, secondAngle, thirdAngle)

if ((firstAngle + secondAngle + thirdAngle) === 180) {
    console.log("It is a Valid triangle")
} else {
    console.log("Invalid Triangle!")
}
