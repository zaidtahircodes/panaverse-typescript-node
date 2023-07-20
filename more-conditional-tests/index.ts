/* 
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/
let car = "subaru"
console.log(car === "subaru", " | I predict true")
console.log(car === "suBaru", " | I predict false")
car.toLowerCase()
console.log(car === "Subaru", " | I predict false")
console.log(car === "subaru", " | I predict true")
let numbers = 4;
console.log(numbers === 4, " | I predict true")
console.log(numbers >=5, " | I predict false")
console.log(numbers <=4 && car === "subaru", " | I predict true")
console.log(numbers <=4 && car === "sUbaru", " | I predict false")
console.log(numbers <=4 || car === "suBaru", " | I predict true")
let cars = ["subaru", "mercedes", "audi"];
console.log(cars.includes("audi"), "| I predict true")
console.log(cars.includes("toyota"), "| I predict false")
