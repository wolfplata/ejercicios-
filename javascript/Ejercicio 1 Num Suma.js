/*
Ejercicio 1 pide al usuario dos numeros y los suma

let num1 = prompt("ingrese un número 1");
let num2 = prompt("ingrese un número 2");
let sum = parseInt(num1) + parseInt(num2);
console.log(num1);
console.log(num2);

alert("la suma total es " + sum); */

/* Ejercicio 2 Pide al usuario Grados Celcius y sale en Firenheith

let Cel = prompt("Ingrese los grados celcius");
let fire = ((Cel * (9/5))+32);

alert("Los grados firenheit son " + fire); */

/*Pedir un número a un usuario a través de un prompt y luego dividirlo por 10, ejemplo: 5 / 10 igual 0.5

let num = prompt("Ingrese un número");
let Rel = (num/10);

alert("El resultado es "+ Rel); */

/*Si a = [1,2,3] crear un script que determine de muestre un alert del tipo de dato de a. 

let a = [1,2,3];
let array = Array.isArray(a);
console.log(array);

alert("El arreglo es " + array); */

/*Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en una alerta.

let num = prompt("Ingrese un número");



if (num % 2 == 0) {

alert ("El numero " + num + " es par");

}
else {

alert("El numero " + num + " es impar");

}; */

/*Crear un programa que determine si un número introducido en un Prompt es divisible por 11 y 5 o no, mostrar el resultado con console.log

let num = prompt("ingrese un numero");

if (num % 5 ==0 && num % 11==0){

    //alert ("El numero " + num + " es divisible por 5");
    console.log("El numero " + num + " es divisible por 5 y 11");

}
else{
    //alert ("El numero " + num + " no es divisible por 5");
    console.log("El numero " + num + " no es divisible por 5 y 11");
};*/

/*Crear un programa que le pida al usuario dos números en un Prompt y luego muestre en un alerta el número mayor.

let num1 = prompt("Ingresa un numero");
let num2 = prompt("Ingrese otro numero");

if(parseInt(num1) > parseInt(num2)){
    alert("El numero mayor es " + num1);
}
else{
    alert("El numero mayor es " + num2);
};

*/
/*
let num1 = prompt("Ingresa un numero");
let num2 = prompt("Ingrese otro numero");

parseInt(num1)>parseInt(num2) ? alert('El número mayor es: ' + num1) : alert('El número mayor es: ' + num2); */

//*****Crear un programa que determine si un string introducido por un usuario empieza con un número o con una letra*****

//Estaes la solución real, las demás abajo son una prueba 

/*
let usuario = prompt("ingresa tu nombre de usuario, debe incluir números y letras");

console.log(usuario.charAt());
console.log(isNaN(usuario.charAt()));

if (isNaN(usuario.charAt()) === true){
    alert("El usuario empieza por una letra");
}else {
    alert("El usuario empieza por un número");
};
*/

/*
let string = 'kop98'
let firstChart = string.charAt(0);
let result = isNaN(firstChart);
//console.log(string.charAt(0));
//console.log(isNaN(firstChart));

if(result === false) {
    console.log('Empieza por número: ' + firstChart);
} else {
    console.log('Empieza por letra: ' + firstChart);
}*/

/*
let Vector = [0,1,2,3,4,5,6,7,8,9];
let valor = Number;

Vector.forEach(function(valor) {
    if(usuario.startsWith(valor)){
        alert("El usuario empieza por un número");
    }
});
*/

/* 
if(usuario.startsWith('1')){
    alert("El usuario empieza por un número");
}

if(usuario.startsWith('2')){
    alert("El usuario empieza por un número");
}

if(usuario.startsWith('3')){
    alert("El usuario empieza por un número");
}
if(usuario.startsWith('4')){
    alert("El usuario empieza por un número");
}
if(usuario.startsWith('5')){
    alert("El usuario empieza por un número");
}
if(usuario.startsWith('6')){
    alert("El usuario empieza por un número");
}
if(usuario.startsWith('7')){
    alert("El usuario empieza por un número");
}
if(usuario.startsWith('8')){
    alert("El usuario empieza por un número");
}
if(usuario.startsWith('9')){
    alert("El usuario empieza por un número");
}*/

/*
function caracter(){
Vector.forEach(function(valor) {

    console.log(Vector);
    if( usuario.startsWith(valor)){
        alert("El usuario empieza por un número");
        return;
    }
    else{
        alert("El usuario empieza por una letra");
        return;
    };
    
})};

caracter();*/

//*****Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y se determine si el triángulo es válido o no ******

/*
let ang1 = prompt("Ángulo 1");
let ang2 = prompt("Ángulo 2");
let ang3 = prompt("Ángulo 3");

if ((parseInt(ang1)+parseInt(ang2)+parseInt(ang3))==180){
    alert("Los ángulos son válidos");
}
else{
    alert("Los ángulos son invláidos");
};
*/

//Determinar si una palabra empieza con mayúscula o no

//Pasar un texto a mayusculas
/*

function sayLouder(text) {
    return text.toUpperCase();
    }
    
    // sample usage (do not modify)
    console.log(sayLouder("It works"));
    console.log(sayLouder("how are you?"));*/

    //Complete the function getPositiveNumbers such that it returns all numbers greater than 0.
/*
    function getPositiveNumbers(numbers) {
        console.log(numbers);
    return numbers.filter(numbers=>numbers>0);
    }
    
    // sample usage (do not modify)
    console.log(getPositiveNumbers([10, -5, 2, -4]));
    */


    //Complete the function getPassingTests such that it returns all the test results that have a passing grade (10 and above).
    /*
    function getPassingTests(results) {
        console.log(results);
    return results.filter(results=> results.grade>=10);
    }
    
    // sample usage (do not modify)
    const data = [{
        id: 1,
        grade: 10
    }, {
        id: 2,
        grade: 4
    }, {
        id: 3,
        grade: 18
    }]
    console.log(getPassingTests(data))
    */

    