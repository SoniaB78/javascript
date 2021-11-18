//alert("test");

var nb1 = 123;
var nb2 = "123";
console.log(nb1 == nb2); //true
// == compare les valeurs

console.log(nb1 === nb2)// false
// ===compare les valeurs et les types

console.log(nb1 != nb2)// false
// != différent en valeur

console.log(nb1 !== nb2) // true
// !== différent en valeur et en type

// ----------- Exercice -----------
var prenom, monAge, prenomLogin, ageLogin;
prenom = "Sonia";
monAge = 999;

prenomLogin = prompt("Quel est votre prénom ?");
if(prenomLogin === prenom){

	ageLogin = parseInt(prompt("Votre age ?"));
	if (ageLogin === monAge){
		alert("Bienvenue " + prenomLogin);
	}else{
		alert("Votre age n'est pas celui stocké en base de donnée")
	}
}else{
	alert("Attention, prénom non reconnu");
}