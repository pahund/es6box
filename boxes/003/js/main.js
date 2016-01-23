import "babel-polyfill";

let searchTerm = "foo",
    elements = {
        txt: $("#text"),
        incl: $("#includes"),
        sw: $("#startsWith"),
        ew: $("#endsWith"),
        rep: $("#repeat")
    };

function getUserInput() {
    return elements.txt.val();
}

function updateResult(el, testf) {
    if (testf(getUserInput())) {
        el.addClass("ok");
        return;
    }
    el.removeClass("ok");
}

function updateResults() {
    let { incl, sw, ew, rep } = elements;
    updateResult(incl, t => t.includes(searchTerm));
    updateResult(sw, t => t.startsWith(searchTerm));
    updateResult(ew, t => t.endsWith(searchTerm));
    rep.html(getUserInput().repeat(3));
}

elements.txt.keyup(updateResults);
