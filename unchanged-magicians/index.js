"use strict";
let magicians = ["Messi", "Ronaldo", "Neymar"];
let modification = [];
function make_great(original, modify) {
    for (let i = 0; i < original.length; i++) {
        modify[i] = "great " + magicians[i];
    }
    return modify;
}
function show_magician(magician) {
    magician.forEach((magician) => {
        console.log(magician);
    });
}
make_great(magicians, modification);
show_magician(magicians);
show_magician(modification);
