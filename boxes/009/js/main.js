import "../../../node_modules/babel/polyfill";
import Console from "../../../js/Console";
const cons = new Console();

function *createIterator() {
    yield 1;
    yield 2;
    yield 3;
}

let iterator = createIterator();

for (let i of iterator) {
    cons.log(i, "cyan");
}
