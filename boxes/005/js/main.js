import "babel-polyfill";

let elements = {
    num: $("#number"),
    isi: $("#isInteger"),
    issi: $("#isSafeInteger")
};

function getUserInput() {
    return Number.parseFloat(elements.num.val());
}

function updateResult(el, testf) {
    if (testf(getUserInput())) {
        el.addClass("ok");
        return;
    }
    el.removeClass("ok");
}

function updateResults() {
    let { isi, issi } = elements;
    updateResult(isi, n => Number.isInteger(n));
    updateResult(issi, n => Number.isSafeInteger(n));
}

elements.num.keyup(updateResults);

