// Déclaration des constante contenant les éléments à appeller du DOM 
const burgerMenu = document.querySelector('#burger');
const menuModal = document.querySelector('#menu');

const baseApiUrl = 'https://randomuser.me';
const userFisrtName = document.querySelector('#prenom');
const userJob = document.querySelector('#job');
const userAccordBaser = document.querySelector('#accordBaser');
const userVille = document.querySelector('#ville');
const userPays = document.querySelector('#pays');
const userAge = document.querySelector('#age');

/** */
burgerMenu.addEventListener('click', () => {
    menuModal.classList.toggle('active');
});
menuModal.addEventListener('click', () => {
    menuModal.classList.toggle('active');
});

// TO DO : les différentes fonction dont celle pour générer un nombre aléatoire et la recupUser() qui récupèrera les données fournit par l'API 