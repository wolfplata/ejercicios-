var grupotarjetas1 = ["๐","๐๐ฝ","๐ฆ","๐ซ","๐ฎ","๐","โจ","๐"];
var grupotarjetas2 = ["๐ฅต","๐","๐คท","๐๏ธ","๐ป","๐ฉ","๐คก","๐บ"];
var grupotarjetas3 = ["โ ๏ธ","๐","๐","๐ค","๐พ","๐ฝ","๐","๐ง "];
var grupotarjetas4 = ["๐บ","๐ฉ","๐ง๐ป","๐๐ผ","๐","๐งฆ","๐ฆ","๐"];

/*Podemos mezclar los vectores para formar uno solo*/

var totaltarjetas = grupotarjetas1.concat(grupotarjetas2,grupotarjetas3,grupotarjetas4);

/*Tambiรฉn se pueden agregar valores a los vectores*/

nuevototaltarjetas = totaltarjetas.push("hola");

/*Creaciรณn de matrices o Arrays anidados*/

var arrayanidado = [
    ["๐","๐๐ฝ","๐ฆ","๐ซ","๐ฎ","๐","โจ","๐"],
    ["๐ฅต","๐","๐คท","๐๏ธ","๐ป","๐ฉ","๐คก","๐บ"],
    ["โ ๏ธ","๐","๐","๐ค","๐พ","๐ฝ","๐","๐ง "],
    ["๐บ","๐ฉ","๐ง๐ป","๐๐ผ","๐","๐งฆ","๐ฆ","๐"]
];


console.log(arrayanidado);

/*Se accede a un dato especรญfico de la matriz poniendo [Fila][Columna]*/
console.log(arrayanidado[0][4]);

/*Se duplican las tarjetas*/

var totaltarjetas1=grupotarjetas1.concat(grupotarjetas1);

function BarajaTarjetas(){
    
    var resultado;
    
   resultado = totaltarjetas1.sort(function(){ 
      
        return 0.5-Math.random();

    });

    return resultado;
}

/*Se crea una funciรณn para repartir las tarjetas sobre la mesa*/

function repartetarjetas() {

    var mesa = document.querySelector("#mesa");
    var tarjetasBarajadas = BarajaTarjetas();

    mesa.innerHTML="";

    tarjetasBarajadas.forEach(function(elemento){

        var tarjeta1 = document.createElement ("div");

        tarjeta1.innerHTML="<div class='tarjeta' data-valor= " + elemento + ">" +
        "<div class = 'tarjeta__contenido'>" +
        elemento + 
        "</div>"+
        "</div>";

    mesa.appendChild(tarjeta1);
    
    });
}

function descubrir(){

    var descubiertas;
    var totaldescubiertas = document.querySelectorAll (".descubierta:not(.acertada)");
    //console.log(totaldescubiertas);

    if (totaldescubiertas.length > 1){
        return;
    }

    this.classList.add("descubierta");

    descubiertas = document.querySelectorAll (".descubierta:not(.acertada)");

    if(descubiertas.length < 2 ){
        return;
    }

/* con el textContent accedemos al texto escrito enla clase, eneste caso un emoji
   pero tambiรฉn podrรญa ser una imagen, por lo tanto para este ejemplo usaremos 
   otra forma

    if(descubiertas[0].textContent === descubiertas[1].textContent){
        console.log("Acierto");
    }
    else { console.log("Erroneo");
    }                               */

    comparar(descubiertas);

}

function comparar(tarjetasacomparar){

//Lo haremos con dataset para que acceda al data valor del HTML en vez de usar el textContent

if(tarjetasacomparar[0].dataset.valor === tarjetasacomparar[1].dataset.valor){
    acierto(tarjetasacomparar);
}
else {
     error(tarjetasacomparar);
}
    
}

function acierto(lasTarjetas){
    lasTarjetas.forEach(function(elemento){
        elemento.classList.add("acertada");
    })
};

function error(lasTarjetas){
    lasTarjetas.forEach(function(elemento){
        elemento.classList.remove("descubierta");
    })
};

repartetarjetas();

document.querySelectorAll(".tarjeta").forEach(

    function (elemento){
    elemento.addEventListener("click",descubrir);
    }

);