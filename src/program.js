import {Calculator} from './calculator.js'; 

export class Program {
    constructor () {
        console.log("Program initialized");
    }

    changeButtonColor (t, color) {
        t.style.backgroundColor = color;
        t.style.color = "white";
    }

    pozdravil (event) {
        let popup = document.getElementById ("pop-up");  
        popup.style.display = "block";
        console.log(event);
        this.changeButtonColor (event.target, "black");
    } 

    dobavil () {
        console.log("dobavil");
    }
    
    execute () {
        console.log("program executed");
        var calculator = new Calculator (10,2);
        var res = calculator.sum ();
        var calculator2 = new Calculator (9,4);
        var res2 = calculator2.sum ();
        console.log(res);
        console.log(res2);
        let elem = document.getElementById ("button-add-product"); 
        elem.addEventListener("click", this.pozdravil.bind(this));

        let saveBtn = document.getElementById ("saveBtn");
        saveBtn.addEventListener("click", this.dobavil.bind(this));    
    }
}
