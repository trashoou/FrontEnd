// Пример 1 создание объекта
const student = {
    name: "Вася",
    age: 72
};
console.log(student);
console.log(student.name);
console.log(student.age);

// Пример 2 создание объекта
const product = {
    title: "iPhone",
    price: 2000,
    "model of phone": "X"
};
console.log(product);
console.log(product.title);
console.log(product.price);
console.log(product["model of phone"]);

// Положить значения по ключу
product.diagonal = 6.5;
product["type of adapter"] = "USB-C";
console.log(product);

//Пример 3
// Если у нас есть переменная и мы хотим доставать
// значения из объекта по этой переменной

let key = "age";
console.log(student[key]);
key = "name";
console.log(student[key]);

const client= {
    firstName: "John",
    wife: "Maria"
};
const key1 = "wife";
// Как достать по переменной из объекта
console.log(client.key1) // undefined
console.log(client[key1]) // Maria