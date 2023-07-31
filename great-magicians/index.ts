let magicians = ["Lionel Messi", "Some name", "Some other name"];

function great_magicians(magician:string[]) {
    // using for of loop
    for (let i= 0; i < magician.length; i++) {
        magician[i] = "great " + magician[i]
    }

}
function show_magician(magician:string[]) {
    magician.forEach((magicman) => {
        console.log(magicman)
    })
}

great_magicians(magicians)
show_magician(magicians)
