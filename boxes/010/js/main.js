import "../../../node_modules/babel/polyfill";
import Console from "../../../js/Console";
import Identity from "./Identity";
import Maybe from "./Maybe";
import DoGenerator from "./DoGenerator";

const cons = new Console();
let result;

cons.log("Identity Monad", "yellow");

result = new Identity(5).bind(value => new Identity(6).bind(value2 => new Identity(value + value2)));

cons.log(result);

cons.log("Maybe Monad", "yellow");

result = new Maybe(5).bind(value => new Maybe(6).bind(value2 => new Maybe(value + value2)));

cons.log("chained binds: " + result);

result = new Maybe(5).bind(value => Maybe.NOTHING.bind(value2 => new Maybe(value + value2)));

cons.log("chained binds with NOTHING: " + result);

result = DoGenerator.do(function *() {
    let value = yield new Maybe(5),
        value2 = yield new Maybe(6);
    return new Maybe(value + value2);
}());

cons.log("do-generator: " + result);

result = DoGenerator.do(function *() {
    let value = yield new Maybe(5),
        value2 = yield Maybe.NOTHING;
    return new Maybe(value + value2);
}());

cons.log("do-generator with NOTHING: " + result);

function getUserName() {
    return new Maybe({
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
}

function getUserEmail() {
    return new Maybe({
        getEmail() {
            let email = $("#email").val();
            if (email.match(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i) === null) {
                return Maybe.NOTHING;
            }
            return new Maybe({
                address: email,
                url: "mailto:" + email
            });
        }
    });
}

$("#email, #name").keyup(() => {
    cons.log("First name: " + getUserName().bind(name => name.getName()).bind(name => name.firstName), "cyan");
    cons.log("Email: " + getUserEmail().bind(user => user.getEmail()).bind(email => email.url), "cyan");
});


