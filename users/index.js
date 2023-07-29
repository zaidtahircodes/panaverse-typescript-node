"use strict";
let users = ["Hamza", "Ismaael", "Admin"];
// EX 31 test to check if useers array is not empty
if (users.length > 0) {
    // loop using a forEach loop
    users.forEach(user => {
        // check if the user is an admin
        if (user === "Admin") {
            console.log(`Hello ${user}, would you like to see a status report?`);
        }
        // if user is not admin do this
        else {
            console.log(`Hello ${user}, thank you for logging in again.`);
        }
    });
}
else {
    console.log("we need to find some users");
}
