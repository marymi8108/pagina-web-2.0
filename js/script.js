document.getElementById("corte1").addEventListener("click", function () {
    ocultarContenido();
    document.getElementById("contenido-corte1").style.display = "block";
});

document.getElementById("corte2").addEventListener("click", function () {
    ocultarContenido();
    document.getElementById("contenido-corte2").style.display = "block";
});

document.getElementById("corte3").addEventListener("click", function () {
    ocultarContenido();
    document.getElementById("contenido-corte3").style.display = "block";
});

function ocultarContenido() {
    var contenido = document.getElementsByClassName("contenido");
    for (var i = 0; i < contenido.length; i++) {
        contenido[i].style.display = "none";
    }
}
