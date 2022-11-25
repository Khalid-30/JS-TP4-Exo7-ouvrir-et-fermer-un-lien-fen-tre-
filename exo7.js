let fenetre = null;

function ouvre() {
if (!fenetre) {
fenetre = window.open("https://www.art-deco-stickers.fr/700/sticker-fenetre-soleil.jpg");
} else {
window.alert("Attention, une fenêtre est déjà ouverte...");
}
}

function ferme() {
if (fenetre) {
fenetre.close();
fenetre = null;
} else {
window.alert("Aucune fenêtre n'a été ouverte...");
}
}
// fermer une fenetre ouverte
if (maFenetre !== null) {
    maFenetre.close();
    maFenetre = null; // je remets à null
    } else {
    console.log("aucune fenêtre n'est ouverte");
    }
    // une variable pour stocker une référence vers la fenêtre ouverte
let maFenetre = null;     // initialisée à null pour dire qu'elle n'a pas encore été ouverte

// ouvrir une nouvelle fenêtre si ce n'est pas déjà fait
if (maFenetre === null) {
maFenetre = window.open();
} else {
console.log("Une fenêtre est déjà ouverte");
}
