// alert("test")

// boucle pour faur un table
// var choix = prompt("Entrez un nombre à multiplier par 10 ...");
// for (var i = 1; i <= 10; i++) {
//     var multiplication = i * choix;
//     document.write(choix + " X " + i + " = " + multiplication + "<br />");
// }

// boucle + condition
// var choix = prompt("Entrez un nombre à multiplier par 10 ... ENTRE 2 et 9");
// if ((choix >= 2) && (choix <= 9)) {
//     for (var i = 1; i <= 10; i++) {
//         var multiplication = i * choix;
//         document.write(choix + " X " + i + " = " + multiplication + "<br />");
//     }
// } else {
//     document.write("Ce doit être un nombre compris entre 2 et 9 (inclus)");
// }

// boucle + condition + boucle
var choix = prompt("Choisis un nombre entre 2 et 9:");
while ((choix > 1) || (choix < 10)) {/* Boucle infinie */
    if ((choix >= 2) && (choix <= 9)) {
        for (var i = 1; i <= 10; i++) {
            var resultat = choix * i;
            document.write(choix + " x " + i + " = " + resultat + "<br />");
        }
        break;
    } else {
        choix = Number(prompt("Entrez un nombre entre 2 et 9 : "));
    }
}

