import "../../../node_modules/babel/polyfill";

let elements = {
        num: $("#number"),
        isi: $("#isInteger"),
        issi: $("#isSafeInteger")
    };

elements.num.keyup(updateResults);

function updateResults() {
    let { isi, issi } = elements;
    updateResult(isi, n => {
        return Number.isInteger(n);
    });
    updateResult(issi, n => {
        return Number.isSafeInteger(n);
    });
}

function updateResult(el, testf) {
    if (testf(Number.parseFloat(elements.num.val()))) {
        el.addClass("ok");
        return;
    }
    el.removeClass("ok");
}
