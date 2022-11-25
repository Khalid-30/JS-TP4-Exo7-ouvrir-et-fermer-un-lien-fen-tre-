# JS-TP4-Exo7-ouvrir-et-fermer-un-lien-fenêtre-
Exercice 7
Créez 2 boutons sur une page HTML, “ouvrir fenetre” et “fermer fenetre”. Un clic (évènement onclick ) sur ces boutons appelle une fonction qui ouvre une nouvelle fenêtre (ou onglet) à l'URL de votre choix, ou une fonction qui la ferme, respectivement.

Indication : Voici un bout de code qui permet d'ouvrir et fermer une fenêtre :

Ouvre

Ferme
// une variable pour stocker une référence vers la fenêtre ouverte
let maFenetre = null;     // initialisée à null pour dire qu'elle n'a pas encore été ouverte

// ouvrir une nouvelle fenêtre si ce n'est pas déjà fait
if (maFenetre === null) {
  maFenetre = window.open();
} else {
	 console.log("Une fenêtre est déjà ouverte");
}

// fermer une fenetre ouverte
if (maFenetre !== null) {
  maFenetre.close();
  maFenetre = null; // je remets à null
} else {
	 console.log("aucune fenêtre n'est ouverte");
}
