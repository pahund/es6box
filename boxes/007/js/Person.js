import Console from "../../../js/Console";

const cons = new Console(),

    /* using Symbol to create a private property */
    name = Symbol("name property"),

    /* using Symbol to create a private method */
    modify = Symbol("modify method");

class Person {
    constructor(initialName) {
        this[name] = initialName;
    }

    [modify](input) {
        return input.toUpperCase();
    }
    sayName() {
        cons.log("My name is " + this[name]);
    }

    set name(newName) {
        this[name] = this[modify](newName);
    }

    get name() {
        return this[name];
    }

    static createHugo() {
        return new Person("Hugo");
    }

}

export default Person;
