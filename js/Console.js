class Console {
    constructor() {
        this.$console = $("#console");
    }
    log(msg) {
        this.$console.find("p").last().removeClass("new");
        this.$console.append("<p class=\"new\">" + msg + "</p>");
        this.$console.scrollTop(this.$console.prop("scrollHeight"));
    }
}

export default Console;