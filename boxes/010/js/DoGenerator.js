class DoGenerator {
    static do(generator) {
        return (function step(value) {
            let r = generator.next(value);
            if (r.done) {
                return r.value;
            }
            return r.value.bind(step);
        }());
    }
}

export default DoGenerator;
