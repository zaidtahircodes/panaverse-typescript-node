function desc_city(city:string, country:string = "Pakistan") {
    return `${city} is in ${country}`

}

console.log(desc_city("Karachi"))
console.log(desc_city("Lahore"))
console.log(desc_city("Helsinki", "Poland"))