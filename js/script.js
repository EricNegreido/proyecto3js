//OBJETOS

class personal {        //Nombre de la peronsa, y puesto de trabajo, con su lista personal de deudas y pagos Ej = personal(roberto, mozo)
    constructor (name, job){
        this.name = name;
        this.job = job;
        let peronal_list = [];
    }
}

class item {    // El producto en si que se agrega a la lista con su costo correspondiente , Ej = item(adelanto, plata, 1000) o item(fiar, coca350, 250)
    constructor (subject, product, cost){
        this.subject = subject;
        this.product = product;
        this.cost = cost;      
    }
}

const register = [];