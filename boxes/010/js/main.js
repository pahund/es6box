import "babel-polyfill";
import Console from "../../../js/Console";
import Identity from "./Identity";
import Maybe from "./Maybe";
import DoGenerator from "./DoGenerator";

const cons = new Console();
let result,
    userInputReader;

cons.log("Identity Monad", "yellow");

result = new Identity(5).bind(value => new Identity(6).bind(value2 => new Identity(value + value2)));

cons.log(result);

cons.log("Maybe Monad", "yellow");

result = new Maybe(5).bind(value => new Maybe(6).bind(value2 => new Maybe(value + value2)));

cons.log("chained binds: " + result + " - value: " + result.value + " - is empty: " + result.isEmpty);

result = new Maybe(5).bind(value => Maybe.NOTHING.bind(value2 => new Maybe(value + value2)));

cons.log("chained binds with NOTHING: " + result + " - value: " + result.value + " - is empty: " + result.isEmpty);

result = DoGenerator.do(function *() {
    let value = yield new Maybe(5),
        value2 = yield new Maybe(6);
    return new Maybe(value + value2);
}());

cons.log("do-generator: " + result + " - value: " + result.value + " - is empty: " + result.isEmpty);

result = DoGenerator.do(function *() {
    let value = yield new Maybe(5),
        value2 = yield Maybe.NOTHING;
    return new Maybe(value + value2);
}());

cons.log("do-generator with NOTHING: " + result + " - value: " + result.value + " - is empty: " + result.isEmpty);

userInputReader = new Maybe({
    getEmail() {
        let email = $("#email").val();
        if (email.match(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i) === null) {
            return Maybe.NOTHING;
        }
        return new Maybe({
            address: email,
            url: "mailto:" + email
        });
    },
    getName() {
        let value = $("#name").val();
        if (value.match(/^[a-z]+ [a-z]+$/i) == null) {
            return Maybe.NOTHING;
        }
        value = value.split(" ");
        return new Maybe({
            firstName: value[0],
            lastName: value[1]
        });
    }
});

$("#email, #name").keyup(() => {
    let firstName = userInputReader.bind(input => input.getName()).bind(name => name.firstName),
        userEmail = userInputReader.bind(input => input.getEmail()).bind(email => email.address);
    if (!firstName.isEmpty) {
        cons.log("First name: " + firstName, "cyan");
    }
    if (!userEmail.isEmpty) {
        cons.log("Email: " + userEmail, "cyan");
    }
});

$("#email, #name").keyup(() => {
    let userInput = DoGenerator.do(function *() {
        let name, email;
        name = yield (() => {
            let v = $("#name").val();
            if (v.match(/^[a-z]+ [a-z]+$/i) == null) {
                return Maybe.NOTHING;
            }
            v = v.split(" ");
            return new Maybe({
                firstName: v[0],
                lastName: v[1]
            });
        })();
        email = yield (() => {
            let v = $("#email").val();
            if (v.match(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i) === null) {
                return Maybe.NOTHING;
            }
            return new Maybe({
                address: v,
                url: "mailto:" + v
            });
        })();
        return new Maybe({
            name,
            email
        });
    }());
    if (!userInput.isEmpty) {
        cons.log("First name: " + userInput.value.name.firstName, "red");
        cons.log("Email: " + userInput.value.email.address, "red");
    }
});
