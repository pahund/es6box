import "../../../node_modules/babel/polyfill";
import Person from "./Person";

let patrick = new Person("Patrick");

patrick.sayName();

patrick.name = "pat";

patrick.name2 = "patrizius";

patrick.sayName();

let hugo = Person.createHugo();

hugo.sayName();


