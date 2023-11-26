class Plant {
    constructor(height, age) {
        this.height = height;
        this.age = age;
    }

    grow() {
        this.height += 10;
        console.log(`Plant growth is increased. Current height: ${this.height} cm`); 
    }
}

class Rose extends Plant {
    constructor(height, age, numberOfFlowers) {
        super(height, age);
        this.numberOfFlowers = numberOfFlowers;
    }
}

const myRose = new Rose(100, 5, 10);

console.log(`Rose before grow. Current height: ${myRose.height} cm`);
myRose.grow()
console.log(`================`)
console.log(myRose);