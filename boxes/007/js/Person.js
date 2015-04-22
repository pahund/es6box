import Console from "../../../js/Console";

const cons = new Console(),

    /* using Symbol to create a private property */
    _name = Symbol("name"),

    /* using Symbol to create a private method */
    _modify = Symbol("modify method");

class Person {
    constructor(name) {
        this[_name] = name;
    }

    [_modify](input) {
        return input.toUpperCase();
    }
    sayName() {
        cons.log("My name is " + this[_name]);
    }

    set name(name) {
        this[_name] = this[_modify](name);
    }

    get name() {
        return this[_name];
    }

    static createHugo() {
        return new Person("Hugo");
    }

}

export default Person;
