import "../../../node_modules/babel/polyfill";

let elements = {
        num: $("#number"),
        isi: $("#isInteger"),
        issi: $("#isSafeInteger")
    };

elements.num.keyup(updateResults);

function updateResults() {
    let { isi, issi } = elements;
    updateResult(isi, n => Number.isInteger(n));
    updateResult(issi, n => Number.isSafeInteger(n));
}

function updateResult(el, testf) {
    if (testf(getUserInput())) {
        el.addClass("ok");
        return;
    }
    el.removeClass("ok");
}

function getUserInput() {
    return Number.parseFloat(elements.num.val());
}
