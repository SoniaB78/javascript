// Syntaxe de base

// commentaire sur une ligne

/*
    Ici comentaire sur plusieurs lignes
*/

// Déclarer une variable JS
var Prenom; // on peut remplacer par let

// Affecter une valeur
Prenom = "Sonia";

// Déclarer et affecter
var prenom = "sonia";

// on essaie de finir toutes les instructions par un " ; "

// Plusieurs variables déclarées à la suite
inst_1;
inst_2; inst_3;

// Afficher une boite de dialogue :
alert("Bienvenu sur mon site");
window.alert("Hello world");
// fonctionne aussi avec prompt()

// Afficher dans la console
console.log(Prenom);
// On ouvre la console avec la touche F12

// Afficher dans la page web
document.write("Bientôt la pause repas");

// Demander une valeur à l'utilisateur
prompt("Veuillez entrez votre age.");
window.prompt("pareil");

// pour manipuler la valeur reçu d'un prompt
var age = prompt("Quel age avez-vous?");
console.log(age);

// /!\ Attention Le JS est sensible à la casse ('case sensitive')
// mavariable != maVariable (camelCase) != ma_variable (snake_case)

// Une variable ne peut pas commencer par un chiffre, ne doit pas contenir de caractères alphanumériques, et ne peut pas être un mot réservé (var, for ...)

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Mots_r%C3%A9serv%C3%A9s

/*
    Les types de variable
*/

// Les chaînes de caractère (string)
var vacances = "2025";
var destination = "Australie";

// Les nombres entiers (integer ou int)
var annee = 2025;

// Les nombres décimaux (float)
var nombre_a_virgule = -5.35;

// Les booléens (boolean ou vrai/faux ou true/false)
var aBoolean = false; // ou à l'inverse true

// Les CONSTANTES
/*
    La declaration de constante permet de rendre la variable accessible uniquement en lecture.
    Variable != constante
    Contrairement à une variable après affectation (de valeur) on ne pourra plus la modifier
*/
// Par convention les constantes sont en majuscules
const PAYS = "France"; 
const AN = '2020';
const BIRTH = 2020;

// Connaître le type d'une variable
console.log(vacances);
console.log(typeof vacances);
console.log(annee);
console.log(typeof annee);

// En JS les variables sont auto-typées
// On peut convertir une variable de type NUMBER en STRING et aussi STRING en NUMBER
// On utilisera les fonctions natives de JS parseInt(), parseFloat et toString()

var unChiffre = "12";
console.log(unChiffre);
console.log(typeof unChiffre);

// STRING -> NUMBER
unChiffre = parseInt(unChiffre);
console.log(typeof unChiffre);

unChiffre = "12.22";

// STRING -> FLOAT
unChiffre = parseFloat(unChiffre);
console.log(typeof unChiffre);

// NUMBER -> STRING
var nb_en_lettres = 258;
nb_en_lettres = nb_en_lettres.toString();
console.log(typeof nb_en_lettres);

// FIN