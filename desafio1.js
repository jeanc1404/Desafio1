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



