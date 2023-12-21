import {Calculator} from './calculator.js'; 
import {Product} from './product.js';

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
        // подключаем product js
        let product = new Product (nameField.value, descriptionField.value, priceupField.value, qtyField.value, pictireField.files [0]);
        product.setFields (nameField, descriptionField, priceupField, qtyField, pictireField);        
        
        if (typeof(Storage) !== "undefined" && 
            this.validate(product.fields)) {
                let existingProductText = localStorage.getItem("product");
                if (existingProductText) {
                    let existingProductObj = JSON.parse(existingProductText);
                    if (existingProductObj.name === product.name) {
                        alert ("Товар с таким именем уже существует");
                        return;
                    }
                }
            localStorage.setItem("product", JSON.stringify(product));
            this.resetForm (product.fields);
            this.popup.style.display = "none";
            this.otobrajai (product);
        } else {
            alert ("Извините не \"сохранилось\"");
        }
    }
    
    otobrajai (product) {
        let container = document.getElementById ("product-container");
        var template  = document.getElementById ("template-product");
        let clone     = template.cloneNode (true);

        let templateName        = clone.querySelector ("#name-product");
        let templateDescription = clone.querySelector ("#description-product");
        let templatePrice       = clone.querySelector ("#price-product");
        let templateImage       = clone.querySelector ("#product-image");
        console.log (product);
        templateName.innerText  = product.name;
        templateDescription.innerText = product.description;
        templatePrice.innerText = product.price;
        // Изменяется картинка
        if (product.image) {
            templateImage.src = URL.createObjectURL(product.image);
        } else {
            templateImage.src = "";
        }
        clone.style.display = "block";
        container.append (clone);

    }

    resetForm (fields) {
        fields.nameField.value = "";
        fields.descriptionField.value = "";
        fields.priceupField.value = "";
        fields.qtyField.value = "";
        fields.pictireField.value = "";
        console.dir (fields.pictireField);
    }

    validate (fields) {
        let error = false;
        if (fields.nameField.value=="") {
            error = true; 
            fields.nameField.style.border = "1px solid red";
        }
        if (fields.descriptionField.value=="") {
            error = true;
            fields.descriptionField.style.border = "1px solid red";  
        }
        if (fields.priceupField.value=="") {
            error = true;
            fields.priceupField.style.border = "1px solid red";  
        }
        if (fields.qtyField.value=="") {
            error = true;
            fields.qtyField.style.border = "1px solid red";  
        }
        if (fields.pictireField.value=="") {
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


//obj = { name: "nazvanie", description: "opisanie", func: function() {}}
/*if (!this.validate(nameField)) - ЭТО FAlse   name: "nazvanie", description: "opisanie"*/


        //let templateDescription= document.getElementById ("description-product");
        //templateDescription.innerText = product.decription;
        //добавить сюда блоки 

        //this.templateProduct.style.display = "block";
        