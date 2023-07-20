let guests = ["Malcom X", "Mohammed Ali", "Shafiqa Iqbal"];

console.log("This is my invitation to " + guests[0]);
console.log("This is my invitation to " + guests[1]);
console.log("This is my invitation to " + guests[2]);

// Changing guest list
const uninvited = guests.pop();
console.log(uninvited + " cant make it");

const invited = guests.push("Allama Iqbal")


// started using forEach loop because it got too long and i didnt know if we had to access indexes every single time or not
guests.forEach((guest) => {
    console.log( guest + " writing this to  let you know we found a bigger table for you");
})



// add guest at start
guests.unshift("Fidel Castro")

// add guest in middle
guests.splice(2, 0, "Nelson Mandela")

// I got an error when trying to use the .append() method as it is not capable of adding to an array
guests.push("Napolean")

// will use forEach loop from now on
guests.forEach((guest) => {
    console.log( "You are invited to the party " + guest);
})

// SHRINK guest list
console.log("We only have space for 2 guests now")

console.log("sorry for not being able to invite you to the party " + guests.pop())
console.log("sorry for not beinga able to invite you to the party " + guests.pop())
console.log("sorry for not beinga able to invite you to the party " + guests.pop())
console.log("sorry for not beinga able to invite you to the party " + guests.pop())


console.log("you are still invited to the party " + guests[0])
console.log("you are still invited to the party " + guests[1])
guests.pop()
guests.pop()
console.log(guests)