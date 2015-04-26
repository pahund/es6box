import "../../../node_modules/babel/polyfill";
import Console from "../../../js/Console";
const cons = new Console();
let iterator,
    i;

function *createIterator() {
    yield 1;
    yield 2;
    yield 3;
}

iterator = createIterator();

for (i of iterator) {
    cons.log(i, "cyan");
}
