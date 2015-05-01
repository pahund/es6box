import "../../../node_modules/babel/polyfill";
import Console from "../../../js/Console";
import Identity from "./Identity";
import Maybe from "./Maybe";

const cons = new Console();
let result;

cons.log("Identity Monad", "yellow");

result = new Identity(5).bind(value => new Identity(6).bind(value2 => new Identity(value + value2)));

cons.log(result);

cons.log("Maybe Monad", "yellow");

result = new Maybe(5).bind(value => new Maybe(6).bind(value2 => new Maybe(value + value2)));

cons.log(result);

result = new Maybe(5).bind(value => Maybe.NOTHING.bind(value2 => new Maybe(value + value2)));

cons.log(result);

function getUser() {
    return new Maybe({
        getEmail() {
            let email = $("#email").val();
            if (email.match(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i) === null) {
                return Maybe.NOTHING;
            }
            return new Identity({
                address: email,
                url: "mailto:" + email
            });
        }
    });
}

$("#email").keyup(() => {
    cons.log("Email URL: " + getUser().bind(user => user.getEmail()).bind(email => email.url), "cyan");
});
