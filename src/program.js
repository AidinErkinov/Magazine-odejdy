import {Calculator} from './calculator.js'; 

export class Program {
    constructor () {
       this.popup = document.getElementById ("pop-up");
       this.templateProduct = document.getElementById ("template-product");
       this.templateProduct.style.display = "none";
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
        var descriptionField = document.getElementById ("description");
        var priceupField = document.getElementById ("price-up");
        var qtyField = document.getElementById ("qty");
        var pictireField = document.getElementById ("pictire");
        nameField.value = "";
        descriptionField.value 
        let product = { 
            'name': nameField.value, 
            'description': descriptionField.value,
            'price-up': priceupField.value,
            'quantity' : Number(qtyField.value),
            'image' : pictireField.files[0]       
        };
       
        if (typeof(Storage) !== "undefined" && 
            this.validate(nameField, descriptionField, priceupField, qtyField, pictireField)) {
            
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
        let container = document.getElementById ("product-container");
        var template = document.getElementById ("template-product");
        let clone = template.cloneNode (true);
     
        let templateName = clone.querySelector ("#name-product");
        let templateDescription = clone.querySelector ("#description-product");
        templateDescription.innerText = product.description;
        console.log (product);
        templateName.innerText = product.name;
        clone.style.display = "block";
        container.append (clone);

        //let templateDescription= document.getElementById ("description-product");
        //templateDescription.innerText = product.decription;
        //добавить сюда блоки 

        //this.templateProduct.style.display = "block";
        
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