// alert("test");

var heure = prompt("Entrer une heure");
var minutes = prompt("Entrer des minutes");
var secondes = prompt("Entrer des secondes");

if ((heure >= 0) && (heure <= 23) && (minutes >= 0) && (minutes <= 59) && (secondes >= 0) && (secondes <= 59)) {
    secondes++
    if (secondes === 60) {
        secondes = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            heure++;
            if (heure === 24) {
                heure = 0;
            }
        }
    }
    document.write("<p> Dans une seconde il sera " + heure + " h " + minutes + " min " + secondes + " sec.</p>");
} else {
    document.write("Heure incorrecte !");
}

// var heure = prompt(" Veuillez entrer le nombre d'une heure :");
// var minute = prompt("Veuillez entrer le nombre d'une minute:");
// var seconde = prompt("Veuillez entrer le nombre d'une seconde :");
// var time = new Date();
//  time.setHours(heur);
//  time.setMinutes(min);
//  time.setSeconds(sec);
//  time.setSeconds( dt.getSeconds() +1 );
//  document.write ( time.getHours() +"h" +time.getMinutes() +"min" +time.getSeconds() +" s");