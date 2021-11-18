//alert("test");

/*
	Les boucles
*/

// La boucle FOR
/*
	for(3 argument){
		code
	}
	1. Initialise un compteur, par défaut on utilise i
	2. Condition à vérifier (vrai)
	3. "Pas" d'incrémentation -> combien j'ajoute par tour (i++)
*/

for (var i = 1; i <= 10; i+=2){
	document.write("<p>Instruction exécutée : " + i + " fois.</p>");
}

// La boucle WHILE (tant que)
var j = 1;
while (j <= 10){
	document.write("<p>Instruction exécutée : " + j + " fois.</p>");
	j++;
}

/* 
EXERCICE
	J'ai  1000€ sur mon compte, chaque mois j'ajoute 50€,
	Combien de temps me faut-il pour avoir 2000€ sur mon compte ?
*/

// while
var monCompte = 1000;
var temps = 0;
while(monCompte < 2000){
	monCompte += 50;
	temps++;
}
document.write("<p> Sous sur mon compte : " + monCompte + ".</p>");
//document.write("<p> Jusqu'à 2000€, il me faut : " + temps + " mois.</p>");
document.write("<p> Jusqu'à 2000€, il me faut : " + (temps/12) + " années.</p>");

// for
var tps = 0;
for(var mesSous = 1000; mesSous < 2000; mesSous+= 50){
	document.write("<p>Le mois suivant j'ai : " + mesSous + "€.</p>");
	tps++;
}
document.write("<p> Il m'aura fallu  : " + tps + " mois.</p>");