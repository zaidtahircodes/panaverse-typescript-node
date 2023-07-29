"use strict";
function desc_city(city, country = "Pakistan") {
    return `${city} is in ${country}`;
}
console.log(desc_city("Karachi"));
console.log(desc_city("Lahore"));
console.log(desc_city("Helsinki", "Poland"));
