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

//REGISTROS
const register = [];

const person = [];

//FUNCIONES
let aux;
function addRegister(){
    let newR = document.getElementById("newAdd");
    newR.style.display = "block";


}

function acceptRegister(){
    //Cargar valores
    let aux1 = document.getElementById("name").value;
    let aux2 = document.getElementById("subjet").value;
    let aux3 = document.getElementById("product").value;
    let aux4 = document.getElementById("cost").value;

    // Ocultar el formulario
    let newR = document.getElementById("newAdd");
    newR.style.display = "none";

    // Limpiar los campos del formulario
    document.getElementById("name").value = "";
    document.getElementById("subjet").value = "";
    document.getElementById("product").value = "";
    document.getElementById("cost").value = "";

    //Agregar al DOM
    const newRow = document.createElement("div");
    newRow.className = "row";
    newRow.textContent = `${aux1} ${aux2} ${aux3} ${aux4}  `;
    let reg = document.getElementById("register");
    reg.append(newRow);

}

// // let newperso = document.getElementById("new");
// // newperso.onclick = () => {new personal("eric","cajero")};

let add = document.getElementById("add");
add.onclick = addRegister; 

let acepted = document.getElementById("creat");
acepted.onclick = acceptRegister;



