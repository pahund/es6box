class Maybe {
    constructor(value, isEmpty = false) {
        this.value = value;
        this.isEmpty = isEmpty;
    }

    static get NOTHING() {
        return new Maybe(null, true);
    }

    bind(transform) {
        if (this.isEmpty) {
            return Maybe.NOTHING;
        }
        return transform(this.value);
    }

    toString() {
        return "Maybe(" + (this.isEmpty ? "empty" : this.value) + ")";
    }
}

export default Maybe;
