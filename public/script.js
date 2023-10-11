today = new Date;
jour = today.getDate();
mois = (today.getMonth())+1;
annee = today.getFullYear();
heure = today.getHours ();
minute = today.getMinutes ();

message = "Nous confirmons avoir bien reçu votre réservation le " + jour + "/" + mois + "/" + annee + " à " + heure + ":" + minute;

const para = document.getElementById("confirmation")

para.innerHTML = message


function testDisponibilite(id) {
    const element = document.getElementById(id);
    const destination = document.getElementById ("dest");
    const chèques = document.getElementById ("chèques");
    
    if (chèques.checked && element.value < 2){
        alert("Le mode de paiement « Chèques vacances » n’est possible que pour 1 ou 2 personnes.");
        return false;
    }
    if (element && parseInt(element.value) <=0) {
        alert("Le nombre de participants doit être positif.");
        return false;
    }
    if (element && parseInt(element.value) > 20) {
        alert("Le nombre de participants doit être inférieur à 20.");
        return false;
    } 
    if(!element.value){
        alert ("Le nombre de personnes doit etre un nombre positif");
        return false;
    }
    if (destination.value == "Foix" && element.value <5) {
        alert ("Le voyage à Foix n’est disponible que pour 5 personnes ou plus.");
        return false;
    }
    else {
        alert ("Disponible !")
        return true;
    }
}


function afficherIBAN(){

const vir = document.getElementById('vir');
const chèques = document.getElementById('chèques');
const zoneTexte = document.getElementById('zoneTexte');

vir.addEventListener('change', () => {
    
    if (vir.checked) {
        zoneTexte.style.display = 'block';
    } 
    else {
        zoneTexte.style.display = 'none';
    }
})
if (chèques.checked) {
    zoneTexte.style.display = 'none';

};
}