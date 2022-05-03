/*Variables, cambialas por los id y clases correspondientes*/

/*Id del enlace que despliega el menu*/
var lanzador="#enlace-menu";

/*Id del menu que serà despleado*/
var desplegable="#menu";

/*Clase sin el punto que muestra el menu*/
var despliegaClase="menu-desplegado";

/*A partir de aqui puedes dejar el còdigo tal cual*/

/*Declaramos las funciones*/

function nav(){
var lanz= document.querySelector(lanzador);
lanz.addEventListener("click",despliegaMenu,false);
}

function desoliegaMenu(e){
    e.preventDefault();
    var despl=document.querySelector(desplegable);
    despl.classList.toggle(despliegaClase);
}

/*Agregamos la clase js a la etiqueta html para saber que javascript esta funcionando*/
document.querySelector("html").classList.add("js");

/*ejecutamos la funcion principal*/

nav();
