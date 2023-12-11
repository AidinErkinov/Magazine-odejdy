import {Calculator} from './calculator.js'; 

export class Program {
    constructor () {
       this.popup = document.getElementById ("pop-up");
    }

    changeButtonColor (t, color) {
        t.style.backgroundColor = color;
        t.style.color = "white";
    }

    open (event) {
        this.popup.style.display = "block";
        console.log(event);
        this.changeButtonColor (event.target, "black");
    } 

    dobavil () {
        var nameField = document.getElementById ("name");
        var decriptionField = document.getElementById ("description");
        let product = {'name': nameField.value, 'decription': decriptionField.value};
       
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem("product", product);
            if (this.validate(nameField, decriptionField)) 
                this.popup.style.display = "none";
         } else {
            alert ("Извините не \"сохранилось\"");
        }
        console.log("dobavil"); 
    }
    
//obj = { name: "nazvanie", description: "opisanie", func: function() {}}
/*if (!this.validate(nameField)) - ЭТО FAlse   name: "nazvanie", description: "opisanie"*/

    validate (elem1, elem2) {
        let error = false;
        if (elem1.value=="") {
            error = true; 
            elem1.style.border = "1px solid red";
        }
        if (elem2.value=="") {
            error = true;
            elem2.style.border = "1px solid red";  
        }
        return !error;
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
        elem.addEventListener("click", this.open.bind(this));

        let saveBtn = document.getElementById ("saveBtn");
        saveBtn.addEventListener("click", this.dobavil.bind(this));    
    }
}