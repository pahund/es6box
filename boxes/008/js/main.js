import "../../../node_modules/babel/polyfill";
import Console from "../../../js/Console";

const greenLog = Console.createLogFunction(),
    yellowLog = Console.createLogFunction("yellow"),

    roman = iterate("I", "II", "III"), // you can pass items as variable number of arguments
    arabic = iterate(["1.", "2.", "3."]), // you can also pass items as array
    alpha = iterate(["a)", "b)"], "c)", ["d)"]); // you can mix both methods of passing items

roman(arabic(alpha(yellowLog)))();

nest(roman, arabic, alpha, greenLog); // same result as: roman(arabic(alpha(log)))();

function nest(...functions) {
    functions.reduceRight((prev, curr) => curr(prev))();
}

function iterate(...items) {
    items = items.reduce((prev, curr) => prev.concat(curr), []);
    return callback => {
        return (...prev) => {
            items.forEach(item => {
                if (typeof callback === "function") {
                    callback(...prev.concat(item));
                }
            });
        };
    };
}
