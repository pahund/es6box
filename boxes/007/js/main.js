import "../../../node_modules/babel/polyfill";
import Person from "./Person";

let patrick = new Person("Patrick"),
    hugo = Person.createHugo();

patrick.sayName();

patrick.name = "pat";

patrick.name2 = "patrizius";

patrick.sayName();


hugo.sayName();


