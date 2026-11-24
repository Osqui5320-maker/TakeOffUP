var totalActividades = 5;
var actividadesInscritas = 0;
var actividadesConEvidencia = 0;
var progreso = 0;
var estado = "Sin Iniciar";

console.log("Inicio: "+ estado + "|" + progreso + "%");

//El alumno se inscribe en una actividad. 
actividadesInscritas = actividadesInscritas +1;

if(actividadesInscritas > 0){
    estado = "Pendiente de evidencia";
}

console.log("Inscripción: "+ estado + "|" + progreso + "%");

//El almuno entrega evidencia para esa actividad 
actividadesConEvidencia = actividadesConEvidencia + 1;

if(totalActividades > 0){
    progreso = actividadesConEvidencia * 100 / totalActividades;
}

if(actividadesConEvidencia === totalActividades){
    estado = "Completado"; 
}else {
    estado = "En desarrollo";
}

console.log("Evidencia: "+ estado + "|" + progreso + "%");