
function sandwich_topping(topping:string[]) {
    console.log("Order Summary: ")
    topping.forEach((topping) => {
    console.log(topping)
})
}

sandwich_topping(["cheese", "mushroom", "onion", "fries"])
sandwich_topping(["mozzarella", "mushroom", "chicken"])
sandwich_topping(["blue cheese", "mayo", "mushroom", "chicken", "onion"])
sandwich_topping(["beef"])

