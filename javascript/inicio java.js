/*console.log() muestra mensajes en la consola*/
console.log("hola mundo");

/*alert("HOLA!");*/

/*Declaración de variables*/
var mensaje1 = "hola";

/*/Las comillas en javascript pueden ser dobles o simples, y se pueden contener comillas dentro de comillas 
siguiendo la regla de que se debe usar primero las de un tipo y luego el de otro tipo*/


/*Mostramos la variable declarada*/
console.log(mensaje1);

/*tipos de datos, existen los literales que van entre comillas, las numéricas, booleanas (true , false), A una variable se le puede asignar
el valor de otra variable*/

/*Funciones, estas son trozos de código que se pueden usar varias veces*/
/*Aqui declaro la function, esta puede contener varias variables para su funcionamiento e incluir condicionales*/
function mensaje() {

    var saludo = "Hola";
    var antisaludo = "No me hables";
    var contento = true;

    if (contento===true){
        console.log(saludo);
    } else{
        console.log(antisaludo);
    }
}

/*Acá ejecuto la function*/
mensaje();

/*Podemos crear un loop o un ciclo repetitivo for, mostrará en la consola todos los valores de nombres en este caso*/

var nombres = ["Pedro","Pidro","Pidra"];
var valor = Number;

function mensaje2(nombres){
console.log("hola, " + nombres);
}

nombres.forEach(function(valor){
    mensaje2(valor);
});

/*En javascript existe las variables orientada a objetos, es decir que estas variables pueden 
contener distintas características, las cuales de puede definir y  que se pueden utilizar.
Estas caracteristicas se separan por comas*/

var coche = {

    marca: "ford",
    motor: "electrico",
    acelerar: function(){
        console.log("ruuuuummmmm...");
    }

};

/*Para acceder a las propiedas del objeto, se debe poner el nombre del objeto seguido de punto y su propiedad a usar*/

/* Ej. coche.marca
       coche.motor
       coche.acelerar */

/* El Objeto DOM es como el javascript interpreta las páginas web, lo que se ve en el inspector es como javscript ve la web
con una serie de etiquetas y estructuras anidadas*/

/*Se puede acceder al DOM y utilizar sus variables, pudiendo manipularlas y cambiarlas según convenga*/

    /*var encabezado = document.querySelector("h1");

    encabezado.textContent="ESTAMOS JUGANDO!"

    console.log(encabezado);*/

/*Eventos y listeners, son eventos como hacer un click, o pasar el puntero del mouse por una cierta parte, hacer scroll, etc*/

/*vamos a cambiar el color del body como ejemplo*/

function cambiaColor() {
    this.classList.toggle("cambia");
}

document.querySelector("body").addEventListener("click",cambiaColor);


function recogeDatos(evento){

    /*Priva al formulario de enviarse al servidor y reiniciar la página*/
    evento.preventDefault();

    var nombre = document.querySelector("#nombre").value;
    var fecha = document.querySelector("#fecha").value;
    var edad = 2021 - fecha;
    var bienvenida = document.querySelector("#bienvenida");

     /*Esta sería una forma de mostrar el mensaje sin utilizarlo como etiqueta con propiedades de HTML
    /*bienvenida.textContent= "Hola "+nombre+" ,tienes "+edad+" años" + ", eres una mujer hermosa ¿Sabías?, solo quería decirte que te quiero, y a pesar de que me veas como alguien que no progresa a veces, o aparenta tranquilidad, te diré que no es la realidad, cada día trato de mejorar un poco mas y lo hago porque quiero lo mejor para los dos; ahora si mis maneras no te gustan, lleguemos a un acuerdo y no hagamos la guerra donde no hay armas ni motivos, Por cierto, voltea el letrero frente a ti :-)";*/
    
    /*Ahora vamos a hacerlo como una etiqueta HTML*/
    /*bienvenida.innerHTML= "<p>Hola "+nombre+" ,tienes "+edad+" años" + ", eres una mujer hermosa ¿Sabías?, solo quería decirte que te quiero, y a pesar de que me veas como alguien que no progresa a veces, o aparenta tranquilidad, te diré que no es la realidad, cada día trato de mejorar un poco mas y lo hago porque quiero lo mejor para los dos; ahora si mis maneras no te gustan, lleguemos a un acuerdo y no hagamos la guerra donde no hay armas ni motivos, Por cierto, voltea el letrero frente a ti :-)</p>";*/

    /*Ahora vamos a hacerlo como una etiqueta HTML*/
    bienvenida.innerHTML="<p>Hola "+nombre+" ,tienes "+edad+" años<p>";

};

if (1===1)
{console.log("Esto es una condicional")};

/*recogeDatos();*/

/* Podemos usar los eventos para hacer determinada acción dependiendo de este, puede ser un click, un scroll etc*/

/*function saludar(){
    console.log("hola");
}*/

var miform = document.querySelector("#formulario");

miform.addEventListener("submit",recogeDatos);

/*Podría declarar la function dentro del listener pero es mas complicado de manejar */

