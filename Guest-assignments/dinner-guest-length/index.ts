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


// indicating the number of people invited to the party
console.log(guests.length)