//alert("test");

var mois = parseInt(prompt("Quel mois choisissez-vous", "saisir un chiffre entre 1 et 12"));

if(mois === 2){// février
	document.write("Le mois de février contient 28 jours");
} else if((mois === 4) || (mois === 6) || (mois === 9) || (mois === 11)){//mois 30 jours
	document.write("Le mois numéro " + mois + " fait 30 jours");
}else if((mois === 1) || (mois === 3) || (mois === 5) || (mois === 7) || (mois === 8) || (mois === 10) || (mois === 12)){//mois à 31 jours
	document.write("Le mois numéro " + mois + " fait 31 jours");
}else{
	document.write("Le mois numéro " + mois + " n'est pas dans le calendrier.");
}