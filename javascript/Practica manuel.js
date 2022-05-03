let approved = true
console.log(approved)

let test = null;
let test2 = undefined;

let array = ['Manuel', 'Yordan']
array.push('Jojo')
console.log(array)
//array.splice(1, 1)
console.log(array)

laptopObject = {
    pantalla: '15 pulgadas',
    ram: '8gb',
    procesador: '3.2 Ghz',
    teclado: 'Hyper X',
    mouse: 'redragon',
    test: array,
    car: {
        wheels: '',
        windows: '',
        horsePower: ''
    }
}

console.log(laptopObject)

//view

let object = document.getElementById('object');
object.innerHTML= 'Testing website text';

// Conditions
let a = 1

if (a > array.length) {
    console.log('message')
} else {
    console.log('Bye Yordan')
}


//If the value is 200, print "Please stand by. Computer is rebooting."
//Else if the value is 400, print "Success! Computer online."
//Else print "ALERT: Computer offline!"

//Write a JavaScript program that accept two integers and display the larger

//Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.