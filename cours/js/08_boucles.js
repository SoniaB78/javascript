// alert('test');

/*
    Les boucles
*/

// La boucle FOR
/*
    for (3 arguments){
        code
    }
*/
/*
    1. initialisation du compteur, à partir de combien je compte (par défaut on utilise i pour stoquer la valeur)
    2. la condition à vérifier (elle doit être vrai / true)
    3. le "pas" d'incrémentation (combien on ajoute chaque tour, généralement 1 donc 1++)
*/

for ( var i = 1; i <= 10; i++){
    document.write("<p> Instruction exécutée : " + i + "</p>")
}

// La boucle WHILE
// très utilisée quand on ne connaît pas le nombre de tours à l'avance
var j = 1;
while (j <= 10){
    document.write("<hr /> <p> Instruction exécutée : " + j + "</p>");
    j++;// incrémentation tout à la fin de la boucle
}

/*
        EXERCICE
    J'ai 1000€ sur mon compte 
    chaques mois j'ajoute 50€
    combien de temps faut-il pour avoir 2000€ ?
*/
// WHILE
var monCompte = 1000;
var temps = 0;
while(monCompte < 2000){
    monCompte += 50;
    temps++;
}
document.write("<p>Sous sur mon compte " + monCompte + ".</p>");
document.write("<p>Il faut " + temps + " mois pour avoir 2000€ sur mon compte.</p>");

// FOR
var tps = 0;
for(var mesSous = 1000; mesSous < 2000; mesSous += 50){
    document.write("<p>Le mois suivant j'aurais : " + mesSous + "€.</p>");
    tps++;
}
document.write("<p>Il aura fallu " + tps + " mois pour avoir 2000€ sur mon compte.</p>");
/*
// ORNELLA
var l = 50
for ( var k = 1000; k <= 1950; ){
    k = k + l;
}
document.write("<p> Ce mois ci, le montant de mon économie est de  : " + k + "</p>")

// Mohamed Amin
var j = 1000;
while (j <= 2000){
    document.write("<hr /> <p> instruction exécutée : " + j + "</p>");
    j+=50;// incrémentation tout à la fin de la boucle
}

// CHARLY
var h = 20;
var g = 0;
while (h <= 40){
    console.log((g + (h * 50)));
    document.write("<hr /> <p> Il faudra " + h + " jours pour attendre 2000€ </p>")
    h+=1;
}
*/