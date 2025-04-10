
/* ✅ Exercice 3 : Concaténation de chaînes
Déclare deux variables :

nom (par exemple "Dupont")

prenom (par exemple "Claire")

Crée une variable nomComplet qui contient le nom complet de la personne, puis affiche-la. */

const nom = "Dupont";
const prenom = "Claire";
const nomComplet = nom + " " + prenom; //Peut s'écire aussi avec le template strings : `${nom} ${prenom}`

console.log(nomComplet);