console.log("que sucede");
/* En este programa dibujaremos triángulos utilizando ASCII-Art. Es decir, dados los valores que definen las
figuras (como variables en el programa), se debe imprimir, línea a línea usando asteriscos, la figura
solicitada. Por ejemplo */
var n = 15;
var simbolo = "";
for (var i = 0; i < n; i++) {
    simbolo = simbolo + "*";
    console.log(simbolo);
}
/* Un número se considera SuperPar si todos sus dígitos son números pares. Por otro lado, un número se
considera SuperImpar si todos sus dígitos son números impares. Por ejemplo, el número 486 es SuperPar,
mientras que el número 359 es SuperImpar.
Escriba un programa que reciba un número entero cualquiera y determine si es SuperPar, SuperImpar o
ninguno de los dos. */
/* Escriba un programa que calcule el promedio de todos los dígitos de un número. Por ejemplo, si el número
n = 459, entonces debe mostrar en pantalla el resultado de (4 + 5 + 9)
3 = 6 */
var promedio = 4798;
var digitos = 1;
var sumadigitos = 0;
var value = promedio;
while (promedio / 10 > 1) {
    sumadigitos += value % 10;
    value = (value - (value % 10)) / 10;
    digitos += 1;
    promedio = promedio / 10;
}
sumadigitos += value % 10;
value = (value - (value % 10)) / 10;
console.log(sumadigitos, digitos, sumadigitos / digitos);
/* while (promedio / 10 > 1) {
  sumadigitos += value % 10;
  value = (value - (value % 10)) / 10;
  promedio = promedio / 10;
  digitos += 1;
}
sumadigitos += promedio % 10;
console.log(promedio, sumadigitos, digitos); */
/* El Metro de Santiago ha lanzado una nueva promoción, donde cada 5 viajes se aplica un descuento del 5%
permanente y acumulable en el pasaje. Sabiendo que el pasaje actual del metro en horario valle es de
$730, escriba un programa que muestre en una tabla el precio del pasaje luego de 30 viajes, siguiendo el
formato indicado a continuación: */
/* Variables de inicio */
var viajes = 45; //Cantidad de viajes
var pasaje = 730; //Valor del pasaje
/* Mensaje de inicio */
console.log("**Precio de los pasajes**");
/* Ciclo para recorrer todos los viajes */
for (var i = 1; i <= viajes; i++) {
    /* Condicional para ver si el resto es 0 cuando se divide por 5
    Si es 0, se aplica el descuento y se muestra el valor, sino, se muestra el valor del pasaje normal*/
    if (i % 5 == 0) {
        pasaje = pasaje * 0.95;
        console.log("Viaje ".concat(i, ": $").concat(pasaje, " \u00A1Descuento aplicado"));
    }
    else {
        console.log("Viaje ".concat(i, ": $").concat(pasaje));
    }
}
/* Un número se considera SuperPar si todos sus dígitos son números pares. Por otro lado, un número se
considera SuperImpar si todos sus dígitos son números impares. Por ejemplo, el número 486 es SuperPar,
mientras que el número 359 es SuperImpar.
Escriba un programa que reciba un número entero cualquiera y determine si es SuperPar, SuperImpar o
ninguno de los dos */
var numeroPar = 389;
var digito;
var superPar;
if ((numeroPar % 10) % 2 == 0) {
    superPar = "par";
}
else {
    superPar = "impar";
}
while (numeroPar / 10 > 0.1) {
    if ((numeroPar % 10) % 2 == 0) {
        if (superPar == "impar") {
            superPar = "No es ninguno";
            break;
        }
        else {
            superPar = "par";
        }
    }
    else {
        if (superPar == "par") {
            superPar = "No es ninguno";
        }
        else {
            superPar = "impar";
        }
    }
    numeroPar = (numeroPar - (numeroPar % 10)) / 10;
}
console.log(superPar);
