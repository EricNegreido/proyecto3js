//OBJETOS
let id = 0;

class personal { //Nombre de la peronsa, y puesto de trabajo, con su lista personal de deudas y pagos Ej = personal(roberto, mozo)
    constructor(name, job) {
        this.name = name;
        this.job = job;
        let peronal_list = [];
    }
}

class item { // El producto en si que se agrega a la lista con su costo correspondiente , Ej = item(adelanto, plata, 1000) o item(fiar, coca350, 250)
    constructor(person, subject, product, cost, debt, idd) {
        this.person = person;
        this.subject = subject;
        this.product = product;
        this.cost = cost;
        this.debt = debt;
        this.id = idd;
    }
}

//FUNCIONES

//Muestra los campos para escribir
function show(num) {
    if (0 == num) {
        let newR = document.getElementById("newadd");
        newR.style.display = "block";
    } else if (1 == num) {
        let newE = document.getElementById("newemployee");
        newE.style.display = "block";
    } else if (2 == num) {
        document.getElementById("editTr").style.display = "block";
    }

}
//Nueva transaccion 
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

        newRow.onclick = () => {
            const editButton = document.getElementById("edit");
            editButton.onclick = () => {
                editTransaction(newRow, aux1, aux2, aux3, aux4, aux5);
            };


        };

        //creo mi objeto
        let newTransaction = new item(aux1, aux2, aux3, aux4, aux5, id);
        id++;
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

//Nuevo empleado
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

        //creo mi objeto
        let employee = new item(aux1, aux2);
        //Agrego a la lista de transacciones
        let jobs = JSON.parse(localStorage.getItem("listEmployee")) || []; //Si tengo una lista en locasStorage la uso sino creo una vacia
        jobs.push(employee);
        //Agrego al localStorage}
        let listJson = JSON.stringify(jobs);
        localStorage.setItem("listEmployee", listJson);
    }

    document.getElementById("newname").value = "";
    document.getElementById("job").value = "";
}

function loadDate() {

    let transactions = JSON.parse(localStorage.getItem("TransactionLog"));
    transactions.forEach(element => {
        const newRow = document.createElement("div");
        newRow.className = "row";
        newRow.textContent = `${element.person}  ${element.subject}  ${element.product}  ${element.cost}  ${element.debt}`;
        newRow.onclick = () => {
            const editButton = document.getElementById("edit");
            editButton.onclick = () => {
                editTransaction(newRow, element.person, element.subject, element.product, element.cost, element.debt);
            };


        };
        let reg = document.getElementById("register");
        reg.append(newRow);
    });
    let jobs = JSON.parse(localStorage.getItem("listEmployee"));
    jobs.forEach(elem => {
        const newOption = document.createElement("option");
        const newOption2 = document.createElement("option");
        newOption.textContent = `${elem.person}`;
        newOption2.textContent = `${elem.person}`;
        let reg = document.getElementById("name");
        let reg2 = document.getElementById("editName");
        reg.appendChild(newOption);
        reg2.appendChild(newOption2);
    });
}

function editTransaction(elem, name, subject, product, cost, pay) {

    //Cargar valores
    document.getElementById("editName").value = name;
    document.getElementById("editSubjet").value = subject;
    document.getElementById("editProduct").value = product;
    document.getElementById("editCost").value = cost;
    document.getElementById("editPay").value = pay;
    show(2);

    //Actualizo valores de registro
    const buttonEdit = document.getElementById("editCreat");
    buttonEdit.onclick = () => {
        let value1 = document.getElementById("editName").value;
        let value2 = document.getElementById("editSubjet").value;
        let value3 = document.getElementById("editProduct").value;
        let value4 = document.getElementById("editCost").value;
        let value5 = document.getElementById("editPay").value;


        elem.textContent = `${value1} ${value2} ${value3} ${value4} ${value5}`;

            // Ocultar el formulario
        let newR = document.getElementById("newadd");
        newR.style.display = "none";

        //Actualizo valores del locastorage

        let transactions = JSON.parse(localStorage.getItem("TransactionLog")) || [];
        let updated = transactions.find(transaction => transaction.id == elem.id);
        if (updated) {
            updated.person = value1;
            updated.subject = value2;
            updated.product = value3;
            updated.cost = value4;
            updated.debt = value5;

            let updateJson = JSON.stringify(transactions);
            localStorage.setItem("TransactionLog", updateJson);
        }
    }

    



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

//Llamada de la carga de datos
loadDate();