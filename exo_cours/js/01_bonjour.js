var nom = prompt("Quel est votre nom ?");
var prenom = prompt("Quel est votre prénom ?");

alert("Bonjour, " + nom + " " + prenom + ".");

/* 
    On peut forcer le type d'une donnée en utilisant, pour les nombres, Number()

    exemple :
        var age = Number(prompt("Quel est votre age ?"));

    Il existe aussi parseInt() et parseFloat(), Int pour un nombre entier, float pour un nombre à virgule

    https://stackoverflow.com/questions/48227631/specify-the-variable-type-in-the-prompt

*/