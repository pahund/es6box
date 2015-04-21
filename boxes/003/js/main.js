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
    let { incl, sw, ew, txt, rep } = elements;
    updateResult(incl, t => {
        return t.includes(searchTerm);
    });
    updateResult(sw, t => {
        return t.startsWith(searchTerm);
    });
    updateResult(ew, t => {
        return t.endsWith(searchTerm);
    });
    rep.html(txt.val().repeat(3));
}

function updateResult(el, testf) {
    if (testf(elements.txt.val())) {
        el.addClass("ok");
        return;
    }
    el.removeClass("ok");
}
