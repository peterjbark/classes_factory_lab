class Hamster {
    constructor(name){
        this.name = name;
        this.owner = "";
        this.price = 15;
    }
    wheelRun(){
        console.log("squeak squeak")
    }
    eatFood(){
        console.log("nibble nibble")
    }
    getPrice(){
    return (`${this.price}`)
    }
}
const hamster1 = new Hamster("Jerry");

class Person {
    constructor(name){
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }
    getName(){
        return this.name
    }
    getAge(){
        return this.age
    }
    getWeight(){
        return this.weight
    }
    greet(){
        console.log("Hi! I'm " + `${this.name}` + ", nice to meet you.")
    }
    eat(){
        this.weight += 5;
        this.mood += 3;
        console.log("This is some good food.")
    }
    exercise(){
        this.weight -= 2;
        console.log("Working out sucks.")
    }
    ageUp(){
        this.age += 10
        this.height += 10
        this.weight += 10
        this.mood -= 10
        this.bankAccount += 10
    }
    buyHamster(hamster){
        this.hamsters.push(Hamster)
        this.mood += 10
        this.bankAccount -= this.price;
    }
}
const person1 = new Person("Terry")
person1.buyHamster("bob");
console.log(person1);