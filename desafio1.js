//Ciclo FOR
/*Para el proyecto final, elborare una aplicación web de venta de 
boletos aereos, por tanto enfocare este desafio en ello. */
/*
const pBase = 6000;
const tasas = 0.2;
const impuestos = 0.5;
let nBoletos = Number(prompt("Por favor ingrese la cantidad de boletos que desea comprar: "));
*/
/*let origen =0;
let destino=0;
do {
    origen = Number(prompt("Elija el lugar de origen: \n 1.- Buenos Aires \n 2.-Mendoza \n 3.- Ushuaia \n Ingrese el número de su elección: "));
    console.log(origen);
    destino = Number(prompt(`Elija el lugar de destino: \n 1.- Buenos Aires \n 2.-Mendoza \n 3.- Ushuaia \n Ingrese el número de su elección `));
    console.log(destino);
} while (origen>= 1 && origen <=3 || destino<1 && destino>3 || origen!=destino);
let nombre = ("");
for (nombre=""; nombre!=""; ) {
    nombre = prompt("Ingrese el nombre del pasajero: ");
    nombre = nombre + " " + prompt("Ingrese el Apellido del pasajero: ");
}
*/
/*
let nBoletos = Number(prompt("Por favor ingrese la cantidad de boletos que desea comprar: "));
let i = 0;

for (nBoletos >= 1; i = nBoletos; i++) {
    let nombre = prompt(`Ingrese el nombre del pasajero nro ${i}`);
    let edad = prompt(`Ingrese la edad del pasajero nro ${i}`);
    let total = pBase*tasas*impuestos;
    console.log(`El total del boleto para el pasajero ${nombre} es de: ${total}`);
    total = 0;
}
*/

const pBase = 5000;
alert ("Bienvenido al Simulador de compras de CoderTravel.");
let nBoletos = Number(prompt("Ingrese la cantidad de boletos que desea comprar: "));
texto = "Detalles de los boletos: \n";
for (let i = 0; i!=nBoletos; i++) {
    texto = texto + prompt(`Ingrese el NOMBRE del pasajero ${i}`);
    texto = texto + " " + prompt(`Ingrese el APELLIDO del pasajero ${i}`);
    let edad = Number(prompt(`Ingrese la EDAD del pasajero ${i}`));
    texto = texto + `\nPasajero ${i}:\n`
    console.log(texto);
    if (edad<=8) {
        let boleto = pBase - (pBase*20/100);
        texto = texto + `Descuento por edad = (${pBase*20/100})\nTotal boleto= ${boleto} \n`;
    } else {
        let boleto = pBase;
        texto = texto + `Total boleto: ${boleto} \n`;
    }
}
console.log(texto);
alert(texto);



