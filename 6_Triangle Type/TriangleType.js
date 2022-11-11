
//6. Write a program to check whether a triangle is Equilateral, Isosceles or Scalene.

const sideA = +prompt("Enter length of 1st side of a triangle:")
const sideB = +prompt("Enter length of 2nd side of a triangle:")
const sideC = +prompt("Enter length of 3rd side of a triangle:")


console.log("Side A:", sideA)
console.log("Side B:", sideB)
console.log("Side C:", sideC)

if ((sideA + sideB <= sideC) || (sideB + sideC <= sideA) || (sideA + sideC <= sideB)) {
    console.log("The Triangle is Invalid!")

} else if (sideA === sideB && sideB === sideC) {
    console.log("The Triangle is Equilateral.")

} else if (sideA === sideB || sideB === sideC || sideC === sideA) {
    console.log("The Triangle is Isosceles.")

} else {
    console.log("The Triangle is Scalene.")
}
