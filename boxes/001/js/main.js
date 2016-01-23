import "babel-polyfill";
import FooBar from "./FooBar";

let foobar = new FooBar();

$("#foo").click(() => foobar.foo());
$("#bar").click(() => foobar.bar());


