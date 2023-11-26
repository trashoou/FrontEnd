// Task 1

const names = ["Семен", "Иван", "Петр","Татьяна"];
const ages = [18,27,74,34];
const newArray = [];

for (let i = 0; i<names.length; i++){
    newArray.push(`${names[i]} ${ages[i]} лет/годов`);
}

console.log(newArray);

// Task 2

const reversedArray = newArray.reverse();

console.log(reversedArray);