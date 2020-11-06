var nombre1 = 5;
var nombre2 = 3;

document.write("<p>nombre1 = " + nombre1 + ".</p>");
document.write("<p>nombre2 = " + nombre2 + ".</p>");

var temp = nombre1;
nombre1 = nombre2;
nombre2 = temp;

document.write("<p>Après permutation: nombre1 = " + nombre1 + "et nombre2 = " + nombre2 + ".</p>");