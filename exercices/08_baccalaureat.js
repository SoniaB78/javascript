//alert("test");

var moyenne = parseFloat(prompt("Quelle est ta moyenne au bac ?"));

if(moyenne < 10){
	document.write("Tu es recalé !");
} else if((moyenne >= 10)  && (moyenne < 12)){
	document.write("Tu passes");
} else if ((moyenne >= 12) && (moyenne <= 20)){
	document.write("Bravo pour la mention !");
} else{
	document.write("Et de 0 à 20 ça donne ?");
}