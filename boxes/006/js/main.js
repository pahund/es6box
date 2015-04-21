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
