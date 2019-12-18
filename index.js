const lineSeparator = () => console.log(`=============================================================================================`);

const plus = (a, b) => a + b;
console.log(plus(5, 7));

const anotherPlus = (a, b) => {
    return console.log(`sum`, a + b),
        console.log(`this`, this),
        console.log(`arguments`, arguments)
};
anotherPlus(3, 5);

function plus2(a, b) {
    return console.log(`sum`, a + b),
        console.log(`this`, this),
        console.log(`arguments`, arguments)
}
plus2(5, 7);

lineSeparator();
const calc = {
    name: "some name",
    plus: (a, b) => {
        return console.log(`sum`, a + b),
            console.log(`this`, this),
            console.log(`arguments`, arguments),
            console.log(`name`, calc.name);
    }
};
calc.plus(5, 7);

lineSeparator();
class Dog {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
}

const newDog = new Dog("dog name", "dog breed");
console.log(`name`, newDog.name);
console.log(`newDog`, newDog);

lineSeparator()
const speak = saySomething => { console.log(saySomething); };

const Dog2 = function () { };

Dog2.prototype.speak = speak;

secondDog = new Dog2;
secondDog.name = "second dog name";
secondDog.breed = "second dog breed";
secondDog.speak(`woof`);

console.log(`secondDog:`, secondDog);

lineSeparator()

const myMethod = () => {
    console.log("my method");
    console.log(`this:`, this.key1);
};

const myObject = {
    key1: "prop1"
};

myMethod.call(myObject);

console.log(`myMethod:`, myMethod);

myMethod2 = function () {
    console.log("my method2");
    console.log(`this:`, this.key1);
}
myMethod2.call(myObject);

console.log(`myMethod2:`, myMethod2);