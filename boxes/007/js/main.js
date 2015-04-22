import "../../../node_modules/babel/polyfill";
import Person from "./Person";

let patrick = new Person("Patrick");

patrick.sayName();

patrick.name = "pat";

patrick._name = "patrizius";

patrick.sayName();

let hugo = Person.createHugo();

hugo.sayName();


