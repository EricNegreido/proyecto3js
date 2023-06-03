//OBJETOS

class personal { //Nombre de la peronsa, y puesto de trabajo, con su lista personal de deudas y pagos Ej = personal(roberto, mozo)
    constructor(name, job) {
        this.name = name;
        this.job = job;
        let peronal_list = [];
    }
}

class item { // El producto en si que se agrega a la lista con su costo correspondiente , Ej = item(adelanto, plata, 1000) o item(fiar, coca350, 250)
    constructor(person, subject, product, cost, debt) {
        this.person = person;
        this.subject = subject;
        this.product = product;
        this.cost = cost;
        this.debt = debt;
    }
}

const jobs = [];

//FUNCIONES
let aux;

function show(num) {
    if (0 == num) {
        let newR = document.getElementById("newadd");
        newR.style.display = "block";
    } else if (1 == num) {
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

    if (aux1 != "" && aux2 != "" && aux3 != "" && aux4 != "") { // Condicional para no crear estructura vacia

        //Agregar al DOM
        const newRow = document.createElement("div");
        newRow.className = "row";
        newRow.textContent = `${aux1}  ${aux2}  ${aux3}  ${aux4}  ${aux5}`;
        let reg = document.getElementById("register");
        reg.append(newRow);

        //creo mi objeto
        let newTransaction = new item(aux1, aux2, aux3, aux4, aux5);
        //Agrego a la lista de transacciones
        let transactions = JSON.parse(localStorage.getItem("TransactionLog")) || []; //Si tengo una lista en locasStorage la uso sino creo una vacia
        transactions.push(newTransaction);
        //Agrego al localStorage}
        let transactionJson = JSON.stringify(transactions);
        localStorage.setItem("TransactionLog", transactionJson);
    }

    // Limpiar los campos del formulario
    document.getElementById("name").value = "";
    document.getElementById("subjet").value = "";
    document.getElementById("product").value = "";
    document.getElementById("cost").value = "";
    document.getElementById("pay").value = "";


}

function acceptEmployee() {
    //Cargar valores
    let aux1 = document.getElementById("newname").value;
    let aux2 = document.getElementById("job").value;

    // Ocultar el formulario
    let newE = document.getElementById("newemployee");
    newE.style.display = "none";
    if (aux1 != "" && aux2 != "") { // Condicional para no crear estructura vacia

        //Agregar al DOM
        const newOption = document.createElement("option");
        newOption.textContent = `${aux1}`;
        let reg = document.getElementById("name");
        reg.appendChild(newOption);
    }

    document.getElementById("newname").value = "";
    document.getElementById("job").value = "";
}

function loadTransactions (){

    let transactions = JSON.parse(localStorage.getItem("TransactionLog"));
    transactions.forEach(element => {
        const newRow = document.createElement("div");
        newRow.className = "row";
        newRow.textContent = `${element.person}  ${element.subject}  ${element.product}  ${element.cost}  ${element.debt}`;
        let reg = document.getElementById("register");
        reg.append(newRow);
    });
}

//Eventos

let add = document.getElementById("add");
add.onclick = () => {
    show(0)
};

let accept = document.getElementById("creat");
accept.onclick = acceptRegister;

let newPerso = document.getElementById("new");
newPerso.onclick = () => {
    show(1)
};

let creatEmployee = document.getElementById("accept");
creatEmployee.onclick = acceptEmployee;
loadTransactions();