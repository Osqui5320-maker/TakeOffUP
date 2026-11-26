let totalActividades = 5;
let actividadesInscritas = 0;
let actividadesConEvidencia = 0;
let porcentajeEnPantalla = document.getElementById("Porcentaje-progreso");
let estadoEnPantalla = document.getElementById("estado-progreso");

function actualizarProgreso() {
    let progreso = actividadesConEvidencia * 100 / totalActividades;
    let estado = "Sin Iniciar";

    if (progreso === 100) {
        estado = "Completado";
    } else if (actividadesConEvidencia > 0) {
        estado = "En desarrollo";
    } else if (actividadesInscritas > 0) {
        estado = "Pendiente de evidencia";
    }

    porcentajeEnPantalla.textContent = progreso + "%";
    estadoEnPantalla.textContent = estado;
}

for (let numero = 1; numero <= 2; numero = numero + 1) {
    let boton = document.getElementById("inscribir-" + numero);
    let campoEvidencia = document.getElementById("evidencia-" + numero);
    let tieneEvidencia = false;

    boton.addEventListener("click", function () {
        actividadesInscritas = actividadesInscritas + 1;
        boton.textContent = "Inscrito";
        boton.disabled = true;
        campoEvidencia.disabled = false;
        actualizarProgreso();
    });

    campoEvidencia.addEventListener("change", function () {
        if (campoEvidencia.files.length > 0 && !tieneEvidencia) {
            tieneEvidencia = true;
            actividadesConEvidencia = actividadesConEvidencia + 1;
            actualizarProgreso();
        }
    });

}