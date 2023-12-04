export class Calculator {
    constructor (a,b) {
        this.val1 = a;
        this.val2 = b;
    }
    sum () {
        return (this.val1 + this.val2);
    }
    subtract () {
        return (this.val1 - this.val2);
    }
}
