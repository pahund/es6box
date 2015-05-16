import "../../../node_modules/babel/polyfill";
import Console from "../../../js/Console";
import futureEvents from "./futureEvents";

const cons = new Console();

let promiseCount = 0,
    future;

function testPromise() {
    const thisPromiseCount = ++promiseCount;
    let promise;

    cons.log(thisPromiseCount + ") Started (Sync code started)");

    promise = new Promise(resolve => {
        cons.log(thisPromiseCount + ") Promise started (Async code started)");
        window.setTimeout(() => resolve(thisPromiseCount), 3000);
    });

    promise.then(val => cons.log(val + ") Promise fulfilled (Async code terminated)", "pink"));
    cons.log(thisPromiseCount + ") Promise made (Sync code terminated)");
}

$("#foo").click(testPromise);

future = futureEvents.on("bar");

future.then(() => cons.log("future event 1", "cyan"));
future.then(() => cons.log("future event 2", "cyan"));
future.then(() => $("#bar").prop("disabled", true));
future.then(() => cons.log("number of remaining events: " + futureEvents.getSize()));

$("#bar").click(() => futureEvents.trigger("bar"));

