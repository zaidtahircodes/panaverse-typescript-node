"use strict";
// this is the shirt function and we have explicitly told the program that size should be number and text should be a string
// to make use of typescript so we get an error if we do something wrong before running
function make_shirt(size, text) {
    console.log(`The size is ${size} and the text is ${text}`);
}
make_shirt(12, "Hello");
make_shirt(16, "Panaverse");
