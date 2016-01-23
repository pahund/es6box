import "../../../node_modules/babel/polyfill";
import Console from "../../../js/Console";
const cons = new Console();
let genObj,
    v;

function *foo() {
    yield "a";
    yield "b";
}

function *bar() {
    yield "x";
    yield* foo();
    yield "y";
}

genObj = bar();

$("#call").click(() => cons.log(JSON.stringify(genObj.next())));

for (v of bar()) {
    cons.log(v);
}

cons.log([...bar()]);






