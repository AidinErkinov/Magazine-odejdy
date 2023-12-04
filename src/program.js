import {Calculator} from './calculator.js'; 

export class Program {
    constructor () {
        console.log("Program initialized");
    }
    execute () {
        console.log("program executed");
        var calculator = new Calculator (10,2);
        var res = calculator.sum ();
        var calculator2 = new Calculator (9,4);
        var res2 = calculator2.sum ();
        console.log(res);
        console.log(res2);
    }
}
