class NumberManipulator {
    constructor() {
        this.current = 0;
    }

    add() {
        this.current++;
        return this;
    }

    subtract() {
        this.current--;
        return this;
    }

    showNumber() {
        console.log(this.current);
        return this;
    }
}

// Create an instance of NumberManipulator
let number = new NumberManipulator();

// Chain method calls
number.add().add().subtract().add().subtract().showNumber();