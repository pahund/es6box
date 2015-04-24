class Console {
    constructor() {
        this.$c = $("#console");
        this.handle = undefined;
    }
    log(msg, color) {
        window.clearTimeout(this.handle);
        this.$c.find("p").last().removeClass("new");
        this.$c.append("<p class=\"new" + (color ? " " + color : "") + "\">" + msg + "</p>");
        this.handle = window.setTimeout(() => {
            this.$c.scrollTop(this.$c.prop("scrollHeight"));
        }, 100);
    }
    static createLogFunction(color) {
       return (() => {
            const $cons = $("#console");
            let handle;
            return function (...messages) {
                window.clearTimeout(handle);
                $cons.find("p").last().removeClass("new");
                $cons.append("<p class=\"new" + (color ? " " + color : "") + "\">" + messages.join(" ") + "</p>");
                handle = window.setTimeout(() => {
                    $cons.scrollTop($cons.prop("scrollHeight"));
                }, 100);
            }
        })();
    }
}

export default Console;
