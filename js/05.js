//alert("test");

// -- stucture de base IF

if(true){// entre parenthèse la condition
	/*  code  */
}

var nb1 = 10;
if(nb1 < 50){
	console.log("nb1 est bien inférieur à 50");
}

if(true){
	//code si true
} else {
	//code sinon
}

nb1 = 60;
if(nb1 < 50){
	console.log("nb1 est bien inférieur à 50");
}else{
	console.log("nb1 est supérieur à 50");
}

// On utilise le If pour vérifier l'age de l'internaute.
// Si il est majeur on lui souhaite la bienvenue
// Sinon [1] je lui signale et [2] je le renvoie vers un autre site
var MajoriteFr = 18;

var age = parseInt(prompt("Indiquez votre âge"));

if ( age >= MajoriteFr){
	alert("Bienvenue, vous ètes majeur");
}else{
	alert("Allez voir un autre super site...");
	document.location.href = "https://www.darty.com/"
}