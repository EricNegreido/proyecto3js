//OBJETOS

class personal { //Nombre de la peronsa, y puesto de trabajo, con su lista personal de deudas y pagos Ej = personal(roberto, mozo)
    constructor(name, job) {
        this.name = name;
        this.job = job;
        let peronal_list = [];
    }
}

class item { // El producto en si que se agrega a la lista con su costo correspondiente , Ej = item(adelanto, plata, 1000) o item(fiar, coca350, 250)
    constructor(subject, product, cost) {
        this.subject = subject;
        this.product = product;
        this.cost = cost;
    }
}

//REGISTROS
const register = [];

const person = [];

//FUNCIONES
let aux;

function show(num) {
    if(0 == num){
        let newR = document.getElementById("newadd");
        newR.style.display = "block";
    }else if(1 == num){
        let newE = document.getElementById("newemployee");
        newE.style.display = "block";
    }
    
}

function acceptRegister() {
    //Cargar valores
    let aux1 = document.getElementById("name").value;
    let aux2 = document.getElementById("subjet").value;
    let aux3 = document.getElementById("product").value;
    let aux4 = document.getElementById("cost").value;
    let aux5 = document.getElementById("pay").value;

    // Ocultar el formulario
    let newR = document.getElementById("newadd");
    newR.style.display = "none";

    if( aux1 != "" && aux2 != "" && aux3 != "" && aux4 != ""){ // Condicional para no crear estrucura vacia
        
        //Agregar al DOM
        const newRow = document.createElement("div");
        newRow.className = "row";
        newRow.textContent = `${aux1}  ${aux2}  ${aux3}  ${aux4}  ${aux5}`;
        let reg = document.getElementById("register");
        reg.append(newRow);
    }

    // Limpiar los campos del formulario
    document.getElementById("name").value = "";
    document.getElementById("subjet").value = "";
    document.getElementById("product").value = "";
    document.getElementById("cost").value = "";
    document.getElementById("pay").value = "";

}

function acceptEmployee(){
    //Cargar valores
    let aux1 = document.getElementById("newname").value;
    let aux2 = document.getElementById("job").value;

     // Ocultar el formulario
    let newE = document.getElementById("newemployee");
    newE.style.display = "none";
    if( aux1 != "" && aux2 != "" ){ // Condicional para no crear estrucura vacia
        
        //Agregar al DOM
        const newOption = document.createElement("option");
        newOption.textContent = `${aux1}`;
        let reg = document.getElementById("name");
        reg.appendChild(newOption);
    }

    document.getElementById("newname").value= "";
    document.getElementById("job").value = "";
}

//Eventos

let add = document.getElementById("add");
add.onclick = () => {show(0)};

let accept = document.getElementById("creat");
accept.onclick = acceptRegister;

let newPerso = document.getElementById("new");
newPerso.onclick = () => {show(1)};

let creatEmployee = document.getElementById("accept");
creatEmployee.onclick = acceptEmployee;

