import FooBar from "./FooBar.js";

var foobar = new FooBar();

$("#foo").click(foobar.foo.bind(foobar));
$("#bar").click(foobar.bar.bind(foobar));


