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
    eat(times){
        this.weight += times;
        this.mood += times;
        console.log("This is some good food.")
    }
    exercise(times){
        this.weight -= times;
        console.log("Working out sucks.")
    }
    ageUp(times){
        this.age += times
        this.height += times
        this.weight += times
        this.mood -= times
        this.bankAccount += times
    }
    buyHamster(hamster){
        this.hamsters.push(hamster)
        this.mood += 10
        this.bankAccount -= hamster.getPrice();
    }
}
const timmy = new Person("Timmy");
timmy.ageUp(5);
timmy.eat(5);
timmy.exercise(5);
timmy.ageUp(9);

const gus = new Hamster("Gus");
gus.owner = "Timmy";

timmy.buyHamster(gus);
timmy.ageUp(15);
timmy.eat(2);
timmy.exercise(2);
console.log(timmy);

class Dinner {
    constructor (appetizer, entree, dessert){
        this.appetizer = appetizer;
        this.entree = entree;
        this.dessert = dessert;
    }
}
class Chef {
    bonApetit(appetizer, entree, dessert){
        return new Dinner(appetizer, entree, dessert)
    }
}
const dinners = [];
const frenchChef = new Chef;
dinners.push(frenchChef.bonApetit("Smoked Salmon Canapes", "Steak Frites", "Plum Galette"));
dinners.push(frenchChef.bonApetit("Alsatian Cheese Tart", "Chicken Confit", "Crème Brûlée"));
dinners.push(frenchChef.bonApetit("French Cheese Puffs", "French Onion Soup", "Crêpes Suzette"));

for(meal of dinners) {
    console.log("Today for dinner I had " + meal.appetizer + " as an appetizer, " + meal.entree + " for the main entree and, " + meal.dessert + " for dessert.");
}