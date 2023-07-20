let car = "subaru"
let numerical = 4

console.log(car === "subaru", "| I predict true")
console.log(car === "Subaru", "| I predict false")
console.log(numerical === 4, "| I predict true")
console.log(car === "4", "| I predict false")
car.toUpperCase()
console.log(car === "SUBARU", "| I predict true")
console.log(car === "Subaru", "| I predict false")
car.toLowerCase()
console.log(car === "SUBARU", "| I predict false")
console.log(car === "subaru", "| I predict true")

let letters = car.slice(1, 3)
console.log(letters === "uba", "| I predict false")
console.log(letters === "ub", "| I predict true")