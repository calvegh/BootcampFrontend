/* Variables de inicio */
var viajes = 20; //Cantidad de viajes
var pasaje = 730; //Valor del pasaje
/* Mensaje de inicio */
console.log("**Precio de los pasajes**");
/* Ciclo para recorrer todos los viajes */
for (var i = 1; i <= viajes; i++) {
    /* Condicional para ver si el resto es 0 cuando se divide por 5
    Si es 0, se aplica el descuento y se muestra el valor, sino, se muestra el valor del pasaje normal*/
    if (i % 5 == 0) {
        pasaje = pasaje * 0.95;
        console.log("Viaje ".concat(i, ": $").concat(pasaje.toFixed(3), " \u00A1Descuento aplicado!"));
    }
    else {
        console.log("Viaje ".concat(i, ": $").concat(pasaje.toFixed(3)));
    }
}
