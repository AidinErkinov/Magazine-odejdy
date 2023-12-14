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
        var priceupField = document.getElementById ("price-up");
        var qtyField = document.getElementById ("qty");
        var pictireField = document.getElementById ("pictire");
        let product = { 
            'name': nameField.value, 
            'decription': decriptionField.value,
            'price-up': priceupField.value,
            'quantity' : Number(qtyField.value),
            'image' : pictireField.files[0]       
        };
       
        if (typeof(Storage) !== "undefined" && 
            this.validate(nameField, decriptionField, priceupField, qtyField, pictireField)) {
            
            localStorage.setItem("product", JSON.stringify(product));
            this.popup.style.display = "none";
          //  let productText = localStorage.getItem("product");
          //  let productObj = JSON.parse(productText);
            this.otobrajai (product);
        } else {
            alert ("Извините не \"сохранилось\"");
        }
    }
    
    otobrajai (product) {
       // var template = document.getElementById ("template-product");
        let templateName = document.getElementById ("name-product");
        templateName.value = product.name;
        console.dir (template);
    }

//obj = { name: "nazvanie", description: "opisanie", func: function() {}}
/*if (!this.validate(nameField)) - ЭТО FAlse   name: "nazvanie", description: "opisanie"*/

    validate (nameField, decriptionField, priceupField, qtyField, pictireField) {
        let error = false;
        if (nameField.value=="") {
            error = true; 
            nameField.style.border = "1px solid red";
        }
        if (decriptionField.value=="") {
            error = true;
            decriptionField.style.border = "1px solid red";  
        }
        if (priceupField.value=="") {
            error = true;
            priceupField.style.border = "1px solid red";  
        }
        if (qtyField.value=="") {
            error = true;
            qtyField.style.border = "1px solid red";  
        }
        if (pictireField.value=="") {
            error = true;
            let labelPicture = document.getElementById ("labelPicture");
            labelPicture.style.color = "red";  
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