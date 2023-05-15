const menuMobileBtn = document.querySelector('.nav__container__menu');
const menuMobileBtnClose = document.getElementById('close_menu__mobile');
const menuMobileContainer = document.querySelector('.menu_mobile__container');

//Evento para desplegar el menu mobile
menuMobileBtn.addEventListener("click", () =>{
    menuMobileContainer.style.display = "block";
});

//Evento para cerrar el menu mobile
menuMobileBtnClose.addEventListener("click", () =>{
    menuMobileContainer.style.display = "none";
});