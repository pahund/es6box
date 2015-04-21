import "../../../node_modules/babel/polyfill";
import Console from "../../../js/Console";

let cons = new Console(),
    req = $.getJSON("./js/menu.json");

req.done(data => {
    let { menuItems: [ { item: search }, { item: offer }, { item: inform } ] } = data;
    cons.log("The first menu item is named: " + search.value);
    cons.log("The second menu item is named: " + offer.value);
    cons.log("The third menu item is named: " + inform.value);
});

req.fail((resp) => {
    cons.log("Error reading JSON file: " + resp.responseText); // PH_TODO: REMOVE
});

