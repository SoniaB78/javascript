var i = 1;
var reponse = "";

while ((reponse !== "oui") && (reponse !== "non") && (reponse !== "Oui") && (reponse !== "Non") && (reponse !== "OUI") && (reponse !== "NON")) {
    reponse = prompt("Alors on joue au ni oui ni non?");
    document.write(reponse + " pour la " + i + "° fois, dis mois oui ou non! <br>");
    i++;
}
document.write("<h2 style='background-color: cyan; text-align: center;'> Fini ;) </h2>");


// réponse de Sara
var jeux = prompt(" Aller on va jouer ensemble :");
var compteur = 0;
while (jeux != "oui" && jeux != "non") {
    if (compteur === 0) {
        document.write("Peut-être la" + compteur + "° fois, dis moi oui ou non !" + "<br />");
    } else if (compteur === 1) {
        document.write("Pourquoi pas pour la " + compteur + " fois, dis moi oui ou non !" + "<br />");
    } else if (compteur === 2) {
        document.write("Nope pour la  " + compteur + " fois, dis moi oui ou non !" + "<br />");
    } else if (compteur === 3) {
        document.write("Bon ok pour la " + compteur + " fois, dis moi oui ou non !" + "<br />");
    } else if (compteur === 4) {
        document.write("Null pour la  " + compteur + " fois, dis moi oui ou non !" + "<br />");
    } else if (compteur === 5) {
        document.write("Pour  la " + compteur + " fois, dis moi oui ou non !" + "<br />");
    }
    jeux = prompt(" Aller on va jouer ensemble :");
    compteur++;
}