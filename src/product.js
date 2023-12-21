
export class Product {
    constructor (namefieldText, descriptionFieldText, priceupFieldText, pictire, qtyFieldText) {
        this.name = namefieldText; 
        this.description = descriptionFieldText;
        this.priceup = priceupFieldText;
        this.qty = qtyFieldText;
        this.pictire = pictire;   
    }
     
    setFields (nameField, descriptionField, priceupField, qtyField, pictireField) {
        this.fields = {
            'nameField': nameField,
            'descriptionField': descriptionField,
            'priceupField': priceupField,
            'qtyField': qtyField,
            'pictireField': pictireField
        };    
    }
}
//get нужно для изменения значений, чтобы потом отправить обратно.
