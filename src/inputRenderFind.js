export const inputRenderfind = () => {
  inputDatos.innerHTML = "";
  cardProductos.innerHTML = "";  
  //BUSCAR INPUT ESTRUCTURA
  const miNodo = document.createElement("div");
  miNodo.classList.add("my-1", "d-flex", "flex-column");
  //TITULO ID
  const miNodoTitulo = document.createElement("div");
  miNodoTitulo.textContent = "ID";
  //INPUT ID
  const miNodoIdInput = document.createElement("input");
  miNodoIdInput.classList.add("mb-1");
  miNodoIdInput.setAttribute("type", "number");
  miNodoIdInput.setAttribute("id", "prodId");
  //BTN BUSCAR
  const miNodoBtnBuscar = document.createElement("button");
  miNodoBtnBuscar.classList.add("m-1", "btn", "btn-info");
  miNodoBtnBuscar.setAttribute("type", "submit");
  miNodoBtnBuscar.setAttribute("value", "Buscar");
  miNodoBtnBuscar.setAttribute("id", "btnAccionBuscar");
  miNodoBtnBuscar.textContent = "Buscar";
  //INSERTAR MINODO
  miNodo.appendChild(miNodoTitulo);
  miNodo.appendChild(miNodoIdInput);
  miNodo.appendChild(miNodoBtnBuscar);
  inputDatos.appendChild(miNodo);
};