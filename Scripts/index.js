let menu_principal = document.querySelector(".navegacion__contenedor")
let abrir_menu = document.querySelector(".abrirMenu")
let cerrar_menu = document.querySelector(".cerrarMenu")

abrir_menu.addEventListener('click', abrirMenu);
cerrar_menu.addEventListener('click', cerrarMenu);
function abrirMenu(){
    menu_principal.style.bottom = "0vh";
}
function cerrarMenu(){
    menu_principal.style.bottom = "100vh";
}