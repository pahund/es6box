import "../../../node_modules/babel/polyfill";
import Console from "../../../js/Console";
const cons = new Console();
let genObj;

function logWithDelay(msg) {
    return new Promise(resolve => setTimeout(() => {
        cons.log(msg);
        resolve();
    }, 1000));
}

function *genFunc() {
    logWithDelay("First");
    yield;
    cons.log("Second");
}

genObj = genFunc();

$("#call").click(() => cons.log(JSON.stringify(genObj.next())));




