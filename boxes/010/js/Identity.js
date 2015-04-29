class Identity {
    constructor(value) {
        this.value = value;
    }

    bind(transform) {
        return transform(this.value);
    }

    toString() {
        return "Identity(" + this.value + ")";
    }
}

export default Identity;
