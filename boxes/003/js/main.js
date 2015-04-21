import "../../../node_modules/babel/polyfill";

let searchTerm = "foo",
    elements = {
        txt: $("#text"),
        incl: $("#includes"),
        sw: $("#startsWith"),
        ew: $("#endsWith"),
        rep: $("#repeat")
    };

elements.txt.keyup(updateResults);

function updateResults() {
    updateResult(elements.incl, t => {
        return t.includes(searchTerm);
    });
    updateResult(elements.sw, t => {
        return t.startsWith(searchTerm);
    });
    updateResult(elements.ew, t => {
        return t.endsWith(searchTerm);
    });
    elements.rep.html(elements.txt.val().repeat(3));
}

function updateResult(el, testf) {
    if (testf(elements.txt.val())) {
        el.addClass("ok");
        return;
    }
    el.removeClass("ok");
}
