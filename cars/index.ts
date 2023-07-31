

function cars(manufacturer:string, model:string, info:{year:number, color:string}) {
    return {
        manufacturer: manufacturer,
        model: model,
        year: info.year,
        color: info.color
    }
}


console.log(cars("BMW", "X5", {year: 2019, color: "blue"}))