import "../../../node_modules/babel/polyfill";
import Console from "../../../js/Console";
const cons = new Console();

// generator
function *createIterator() {
    yield 1;
    yield 2;
    yield 3;
}

// generators are called like regular functions but return an iterator
let iterator = createIterator();

for (let i of iterator) {
    cons.log(i, "cyan");
}
