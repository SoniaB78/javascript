//alert("test");

// L'opérateur ET : && ou AND

if((prenomLogin ===prenom) && (ageLogin === monAge)){
	/* Code si les deux instructions sont vraies */
}

if ((A) && (B)){...}
=> si A est FAUX et B est VRAI => FAUX
=> si A est VRAI et B est FAUX => FAUX
=> si A est FAUX et B est FAUX => FAUX
=> si A est VRAI et B est VRAI => VRAI

// L'opérateur OU : || ou OR  (| = barre oblique = pipe = alt gr + 6)

if ((C) OR (D)){...}
=> si C est FAUX et D est FAUX => FAUX
=> si C est FAUX et D est VRAI => VRAI
=> si C est VRAI et D est FAUX => VRAI
=> si C est VRAI et D est VRAI => VRAI

// L'opérateur "!" signifie le contraire de ...

var utilisateurLog = true;
if (!utilisateurLog){
	//si l'utilisateur n'est pas loggé
}
//ce qui revient à :
if(utilisateurLog == false){
	//si l'utilisateur n'est pas loggé
}