let menu_principal = document.querySelector(".navegacion__contenedor")
let abrir_menu = document.querySelector(".abrirMenu")
let cerrar_menu = document.querySelector(".cerrarMenu")

abrir_menu.addEventListener('click', abrirMenu);
cerrar_menu.addEventListener('click', cerrarMenu);
function abrirMenu(){
    menu_principal.style.top = "0";
}
function cerrarMenu(){
    menu_principal.style.top = "-100vh";
}