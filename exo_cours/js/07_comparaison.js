var nb1 = parseInt(prompt("Entrez un premier nombre afin de le comparer à un deuxième."));
var nb2 = parseInt(prompt("Entrez un deuxième nombre."));

if ( (!isNaN(nb1)) && (!isNaN(nb2)) ){
    if (nb1<nb2){
        document.write("Votre 1er nombre : " + nb1 + " est plus petit que votre 2nd : " + nb2);
    }else if (nb1>nb2){
        document.write("Votre 1er nombre : " + nb1 + " est plus grand que votre 2nd : " + nb2);
    }else{
        document.write("Votre 1er nombre : " + nb1 + " est égal à votre 2nd : " + nb2);
    }
} else {
    alert('Vous n\'avez pas saisi de chiffre(s)');
}

// isNaN  is not a number  -> n'est pas un nombre 
// !isNaN is a number -> c'est un nombre
// \ anti-slash  -> caractère d'échappement pour éviter que mon apostrophe soit prit en compte
