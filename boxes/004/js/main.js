import "../../../node_modules/babel/polyfill";
import Console from "../../../js/Console";

let cons = new Console(),
    req = $.getJSON("./js/menu.json");

req.done(data => {
    let { menuItems: [ { item: { value: search } }, { item: { value: offer } }, { item: { value: inform } } ] } = data,
        { menuItems: [ { subMenu: [ { item: { value: cars } } ] }]} = data;
    cons.log("The first menu item is named: " + search);
    cons.log("The second menu item is named: " + offer);
    cons.log("The third menu item is named: " + inform);
    cons.log("The first item of the search submenu is named: " + cars);
});

req.fail((resp) => {
    cons.log("Error reading JSON file: " + resp.responseText);
});

