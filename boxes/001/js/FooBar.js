import Console from "../../../js/Console";

class FooBar {
    constructor() {
        this.console = new Console();
    }
    foo() {
        this.console.log("foo");
    }
    bar() {
        this.console.log("bar");
    }
}

export default FooBar;
