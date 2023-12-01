const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porsche", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
];
// Task 1:
const newCars = cars.map((car)=>{
    return {brand:car.brand, isDiesel:car.isDiesel}
});
console.log(newCars);
//Task 2:
const dieselCars = cars.filter((car)=>car.isDiesel);
console.log(dieselCars);
//Task 3:
const nonDieselCars = cars.filter((car)=>!car.isDiesel);
console.log(nonDieselCars);
//Task 4:
const totalCostNonDieselCars = cars
.filter(car => !car.isDiesel)
.reduce((total,car) => total + car.price, 0);
//Task 5:
cars.forEach((car)=> car.price *= 1.2);
console.log(cars);
//Task 6:
const cars2 = cars.map((car)=>{
    if (car.isDiesel) {
        return {brand: "Tesla", price: 25000, isDiesel: false};
    }
    return car;
});
console.log(cars2);



