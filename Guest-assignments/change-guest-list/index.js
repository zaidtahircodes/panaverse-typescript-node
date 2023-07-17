"use strict";
let guests = ["Malcom X", "Mohammed Ali", "Shafiqa Iqbal"];
console.log("This is my invitation to " + guests[0]);
console.log("This is my invitation to " + guests[1]);
console.log("This is my invitation to " + guests[2]);
// Changing guest list
const uninvited = guests.pop();
console.log(uninvited + " cant make it");
const invited = guests.push("Allama Iqbal");
console.log("This is my invitation to " + guests[0]);
console.log("This is my invitation to " + guests[1]);
console.log("This is my invitation to " + guests[2]);
