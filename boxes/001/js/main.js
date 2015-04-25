import "../../../node_modules/babel/polyfill";
import FooBar from "./FooBar";

var foobar = new FooBar();

$("#foo").click(() => foobar.foo());
$("#bar").click(() => foobar.bar());


