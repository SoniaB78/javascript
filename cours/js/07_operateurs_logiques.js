// alert("yo");

/*
    L'opérateur ET : && ou AND
*/
// l'opérateur && ou AND permet de cumuler deux conditions

if ((prenomBDD === prenomPrompt) && (ageBDD === agePrompt)){
    // code si les 2 conditions sont validées
}

=> si A est FAUX et B est VRAI => FAUX
=> si A est VRAI et B est FAUX => FAUX
=> si A est FAUX et B est FAUX => FAUX
=> si A est VRAI et B est VRAI => VRAI

/*
    L'opérateur OU : || ou OR   ( | -> alt gr + 6)
*/
// l'opérateur || ou OR permet de rentrer dans la condition si au moins une des deux est vrai

=> si A est FAUX et B est VRAI => VRAI
=> si A est VRAI et B est FAUX => VRAI
=> si A est FAUX et B est FAUX => FAUX
=> si A est VRAI et B est VRAI => VRAI

/*
    L'opérateur contraire : !
*/

var utilisateurLog = true;

if(!utilisateurLog){
    // code si l'utilisateur n'est pas connecté
}
// ce qui revient à écrire :
if(utilisateurLog == false){
    //code si l'utilisateur n'est pas connecté
}