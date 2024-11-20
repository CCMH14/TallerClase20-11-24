var inputtarea = document.getElementById("tareas");
var btn = document.getElementById("agregar");
var listado = document.getElementById("listado");
var cantidad = document.getElementById("cantidad");

var total = 0;


btn.onclick = function() {
    if (inputtarea.value == "") {
        return;
    }
    var elemento = inputtarea.value;

    var li = document.createElement("li");
    li.textContent = elemento;

    listado.appendChild(li);

    total++;
    cantidad.innerHTML = total;

    var btnEliminar = document.createElement("span");
    btnEliminar.textContent = "\u00d7";
    li.appendChild(btnEliminar);

    btnEliminar.onclick = function() {
        li.remove();
        total--;
        cantidad.innerHTML = total;
    }

    inputtarea.value = "";
}