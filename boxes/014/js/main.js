import "babel-polyfill";
import Console from "../../../js/Console";
const cons = new Console();

class BinaryTree {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }

    *[Symbol.iterator]() {
        yield this.value;
        if (this.left) {
            yield* this.left;
        }
        if (this.right) {
            yield* this.right;
        }
    }

    get iterator() {
        return this[Symbol.iterator];
    }
}

const tree = new BinaryTree("a",
    new BinaryTree("b",
        new BinaryTree("c"),
        new BinaryTree("d")
    ),
    new BinaryTree("e")
);

const iterator = tree.iterator();

$("#call").click(() => cons.log(JSON.stringify(iterator.next())));

for (const x of tree) {
    cons.log(x);
}

cons.log([...tree]);

