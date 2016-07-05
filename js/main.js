var tareas = document.getElementById("tareas");
var lista = document.getElementById("lista");
var texto = document.getElementById("ingresoTexto").value;

function agregarTarea (){
  var texto = document.getElementById("ingresoTexto").value;
    if(texto !== ""){
      var div = document.createElement("div");
      div.setAttribute("class", "container");
      var check = document.createElement("input");
      check.setAttribute("type", "checkbox");
      check.setAttribute("class", "checkeo");
      var tarea = document.createElement("span");
      tarea.setAttribute("class", "tarea");
      var btn = document.createElement("button");
      btn.setAttribute("class", "eliminar fa fa-trash");
      btn.addEventListener('click', borrarTarea);
      check.onclick = function() {
        if(this.checked === true){
          tarea.setAttribute("class", "tachar");
        }else{
          tarea.removeAttribute("class");
          }
        }
      tareas.appendChild(div);
      div.appendChild(check);
      tarea.innerHTML = texto;
      div.appendChild(tarea);
      div.appendChild(btn);
      document.getElementById("ingresoTexto").value = "";
    }else{
      alert("La tarea ingresada no es válida!");
  }
}

function crearLista() {
    var campoTarea = document.getElementById("lista");
    var tarea = document.createElement("div");
    tarea.campoTarea.appendChild(div);
}
function borrarTarea(e) {
    var div = e.target.parentNode;
    tareas.removeChild(div);
}
