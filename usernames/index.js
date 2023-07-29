"use strict";
let current_users = ["Hamza", "Ismaael", "Uzair", "Zaid", "Ansari"];
let new_users = ["Ansari", "Umer", "Uzair", "Bhatti", "Saim"];
new_users.forEach(user => {
    if (current_users.includes(user)) {
        console.log("you will need to enter new name");
    }
    else {
        console.log("username is available");
    }
});
