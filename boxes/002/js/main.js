import "babel-polyfill";
import Senf from "./Senf.js";
import Console from "../../../js/Console";

let cons = new Console(),
    senf = new Senf();

cons.log(senf.hello());

