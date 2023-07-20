"use strict";
let places = ["Rome", "Greenland", "Thorpe Park", "Lisbon", "New York"];
console.log(places);
// found this after a quick search on google >>
// created a copy of the starting array to sort it alphabetically without mutating// modifying the original array
let sorted = [...places].sort();
console.log(sorted);
console.log(places);
// reverse the sorted array we used above
let reversesort = [...sorted].reverse();
console.log(reversesort);
console.log(places);
// reverse the order of original array
places.reverse();
console.log(places);
// reverse again so back in original order
places.reverse();
console.log(places);
// sort original array in alphabetical order
places.sort();
console.log(places);
// sort in reverse alphabetical order
places.sort().reverse();
console.log(places);
