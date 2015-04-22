import "../../../node_modules/babel/polyfill";
import Console from "../../../js/Console";

const cons = new Console();

$("#greet1").click(() => {
    greet(1000, () => {
        cons.log("Good afternoon, Sir. How do you do?");
    });
});

$("#greet2").click(() => {
    greet(1000);
});

$("#greet3").click(() => {
    greet2(1000);
});

cons.log("Summing up 1+2+3 using rest parameters: " + sum(1, 2, 3));

cons.log("Passing object with person data to function with destructured parameters...");

showPersonalData({
    firstName: "Patrick",
    lastName: "Hund",
    sex: "m"
    // age is undefined
});

cons.log("Name of the function that shows the personal data: " + showPersonalData.name);

function greet(delay, greetf = defaultGreeting) {
    cons.log("Oh, vee hav a visitor, let's greet him...");
    window.setTimeout(greetf, delay);
}

function greet2(delay, greetf = getRandomGreeting()) {
    greet(delay, greetf);
}

function defaultGreeting() {
    cons.log("Wazzup dude?");
}

function getRandomGreeting() {
    return Math.random() < 0.5 ? defaultGreeting : () => {
        cons.log("Hello, how are you?");
    };
}

function sum(...summands) {
    let sum = 0;
    summands.forEach(s => sum += s);
    return sum;
}

function showPersonalData({ firstName, lastName, age, sex }) {
    cons.log("First name: " + firstName);
    cons.log("Last name: " + lastName);
    cons.log("Age: " + age);
    cons.log("Sex: " + sex);
}

let person = (name => {
    return {
        getName() {
            return name;
        }
    };

})("Patrick");

cons.log("IIFE with arrow function: " + person.getName());

