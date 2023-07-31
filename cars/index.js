"use strict";
function cars(manufacturer, model, info) {
    return {
        manufacturer: manufacturer,
        model: model,
        year: info.year,
        color: info.color
    };
}
console.log(cars("BMW", "X5", { year: 2019, color: "blue" }));
