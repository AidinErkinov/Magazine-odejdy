import {Calculator} from './calculator.js'; 
import {Product} from './product.js';
import {Cycle} from './cycle.js';

export class Program {
    constructor () {
       this.popup = document.getElementById ("pop-up");
       this.templateProduct = document.getElementById ("template-product");
       this.templateProduct.style.display = "none";
       this.productsList = [];
       this.cycleList = [];
       this.cycle ();
       this.iterate ();
    }

    cycle () {
        let cycle = new Cycle ();
        this.cycleList.push (cycle);
        let cycle2 = new Cycle ();
        this.cycleList.push (cycle2);
        let cycle3 = new Cycle ();
        this.cycleList.push (cycle3);
    }

    iterate () {
        let min = 0;
        let max = 1000;
        for (let i=0; i<this.cycleList.length; i++) { 
        this.cycleList [i].rndnumber = this.getRandomInt (min,max)
        }
        console.log (this.cycleList);
    }

    getRandomInt (min,max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
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
        this.productsList.push (product);

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
                console.log (this.productsList);
            localStorage.setItem("product", JSON.stringify(this.productsList));
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
        // С помощью clone можно оставить тот же адрес в ОЗУ, но он не будет привязан к значению. Это важно!!!
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

    haveprod () {
        let productsList = localStorage.getItem("product");
        let productarr = JSON.parse(productsList);
        this.productsList = productarr;
        /* for (let i=0; i<productarr.length; i++) {
            this.otobrajai (productarr[i])
        }*/

        // zakaz 
        productarr.forEach(element => {
            this.otobrajai(element);
        }); 
        // this.otobrajai (productarr);
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

        let elem = document.getElementById ("button-add-product"); 
        elem.addEventListener("click", this.open.bind(this));

        let saveBtn = document.getElementById ("saveBtn");
        saveBtn.addEventListener("click", this.dobavil.bind(this)); 
        
        window.addEventListener("load", this.haveprod.bind(this));
    }
}


//obj = { name: "nazvanie", description: "opisanie", func: function() {}}
/*if (!this.validate(nameField)) - ЭТО FAlse   name: "nazvanie", description: "opisanie"*/


        //let templateDescription= document.getElementById ("description-product");
        //templateDescription.innerText = product.decription;
        //добавить сюда блоки 

        //this.templateProduct.style.display = "block";
        //array1.forEach((element) => console.log(element));