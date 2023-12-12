console.log(`Welcome to TypeScript!`);

let x = 10;
// x = "hello";
console.log(x);

//Как типизировать ?
// Явно vs Неявно
// При объявлении переменной мы указываем тип данных

let y: number = 10;
let p: string;
p = "hello";

let isDrunk: boolean = true;

// Ключевое слово type
// Мы можем объявлять типы отдельно

type Age = number; // Типы данных пишутся всегда с большой буквы
let myAge: Age = 10;

let k: number|string = 10;
k = "hello";
console.log(k);

let qwerty:any = 20;

// Union type
type Pet = "dog" | "cat" 
let petOfAlex: Pet = "dog";
petOfAlex = "cat";
console.log(petOfAlex);

// Можно расширять типы
type ExtendedPet = Pet|"fish";
let q : ExtendedPet = "dog";

console.log(q);

type Gender = "male" | "female";
type ExtenadedGender = Gender |"non binary person";

// Как типизировать массив стринговых значений

let fruits: string[]= ["apple","orange","banana"];
// особенно важно указывать тип данных при создании пустого массива

let vegetables: string[] = [];
vegetables.push("carrot");
console.log(vegetables);

// Как типизировать объекты *

type User = {
    firstName: string;
    isAdmin: boolean;
}

let user1: User = {
    firstName: "Alex",
    isAdmin: true
}

interface Monster {
    name: string;
    height: number;
    isAlive: boolean;
    isEvil: boolean;
}

const frankenstein: Monster = {
    name: "Frankenstein",
    height: 100,
    isAlive: true,
    isEvil: false
}
console.log(frankenstein);

interface ExtendedMonster extends Monster {
    isFlying: boolean;
}

interface City {
    name: string;
    population: number;
    rivesName: string;
    isCapital: boolean;
    isTouristic: boolean;
}

interface ExtendsCity extends City {
    foundingDate: number;
}

const moscow: ExtendsCity = {
    name: "Moscow",
    population: 1000000,
    rivesName: "Petersburg",
    isCapital: true,
    isTouristic: true,
    foundingDate: 100
}