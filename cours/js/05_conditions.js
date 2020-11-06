// alert('test');

//structure de base IF

if (true){ // si(la condition à vérifier)
    // code
}

var nb1 = 10;
if (nb1 < 50){
    console.log("nb1 est inférieur à 50.");
}

if (true){
    // code pour true
}else{
    // code pour faux
}

if(nb1 >= 50){
    console.log("nb1 est supérieur ou égal à 50.")
}else{
    console.log("nb1 est inférieur à 50.");
}

// Exercice on vérifie l'age d'un internaute, 
// si il est majeur je luis souhaite la bienvenue, 
// sinon : Je lui signale(1) et je le renvois sur un autre site(2)     ->document.location

var majorite = 18;

var age = parseInt(prompt("Indiquez votre age"));// force le type de variable à être un entier

if (age >= majorite){
    alert("Bienvenu gros !");
}else{
    alert("Allez voir un autre site ...");
    document.location = "https://www.darty.com"; // .href n'est pas obligatoire
}