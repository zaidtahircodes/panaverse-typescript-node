let person:string = "ZaID";

// this function makes first letter of string uppercase and everything else lower case
function titlecase(str:string) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
// uppercase
console.log(person.toUpperCase())
// lowercase
console.log(person.toLowerCase())
//title case
console.log(titlecase(person))
