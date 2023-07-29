
let current_users = ["Hamza", "Ismaael", "Uzair", "Zaid", "Ansari"];
let new_users = ["Ansari", "Umer", "Uzair", "Bhatti", "Saim"];

// loop over new users array
new_users.forEach(user => {
    // for each new user check if they are in the current users using the includes function
    if(current_users.includes(user)){
        console.log("you will need to enter new name")
    } else {
        console.log("username is available")
    }
})