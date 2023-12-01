const brothers = [
    {race: "hobbit", height: 110, age: 45, name:`Bilbo`},
    {race: "human", height: 185, age: 46, name:`Aragorn`},
    {race: "elf", height: 189, age: 110, name:`Legolas`},
    {race: "hobbit", height: 140, age: 150, name:`Gimly`},
    {race: "human", height: 195, age: 200, name:`Bilbo`}
];

// Метод Map - возвращает новый массив,
// созданный путем применения функции к каждому элементу исходного массива
// Этот метод не изменяет исходный массив

// Пример 1
const names = brothers.map((element)=>element.name);
console.log(names);

// Пример 2
// слова element/ brother -это всего лишь имя переменной (может быть любым)
// Удобно выбирать слово в единственном числе,
// пример массив cars - переменную в колбеке назвать car

const ages = brothers.map((brother)=>brother.age);
console.log(ages);// [45, 46, 110, 150, 200]

const racesNames = brothers.map((brother) => brother.race + " " + brother.name);
console.log(racesNames);// ["hobbit Frodo Baggins", "human Aragorn", "elf Legolas", "dworf Gimly", "human Gandalf"]

const size = brothers.map((brother) =>{
if (brother.height >=170){
return "высокий"; }
return "маленький";
});
console.log(size);// ["маленький", "высокий", "высокий", "маленький", "высокий"]

//Пример 4
// высокий - выше или равно 170
// маленький - ниже 170
// массив из слов [маленький, высокий,высокий, маленький,высокий]

const sizes = brothers.map((brother) =>{
if (brother.height >=170){    return "высокий";}
return "маленький";
});
console.log(sizes);// ["маленький", "высокий", "высокий", "маленький", "высокий"]