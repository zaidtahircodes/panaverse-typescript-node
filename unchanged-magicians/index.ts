let magicians = ["Messi", "Ronaldo", "Neymar"];
let modification:string[] = [];
function make_great(original:string[], modify:string[]) {
    for (let i = 0; i < original.length; i++) {
        modify[i] = "great " + magicians[i];
    }
    return modify;
    




}
function show_magician(magician:string[]) {
    magician.forEach((magician) => {
        console.log(magician)
    })
}

make_great(magicians, modification);

// original
show_magician(magicians);

// copy of original modified
show_magician(modification);
