import Console from "./Console.js";

class FooBar {
    constructor() {
        this.console = new Console();
    }
    foo() {
        this.console.log("Foo");
    }
    bar() {
        this.console.log("Bar");
    }
}

export default FooBar;
