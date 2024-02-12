/*Actividad 1 */

function cambiarColor(color) {
    document.body.style.backgroundColor = color;
}

/*Actividad 2 */

function contarCaracteres() {
    var textarea = document.getElementById('texto');
    var contador = document.getElementById('contador');
    var maxLength = textarea.maxLength;
    var remainingChars = maxLength - textarea.value.length;
    
    contador.textContent = Math.max(0, remainingChars);
}

window.onload = contarCaracteres;

/*Actividad 3 */

document.addEventListener("DOMContentLoaded", function() {
    var alumnos = [
        { nombre: 'Juan Gomez', nota: 7 },
        { nombre: 'Pedro Rodriguez', nota: 4 },
        { nombre: 'Roxana García', nota: 8 },
        { nombre: 'Luciano Lopez', nota: 5 },
        { nombre: 'Fernanda Gimenez', nota: 6 },
        { nombre: 'Florencia Martinez', nota: 10 },
        { nombre: 'Raul Sanchez', nota: 7 },
        { nombre: 'Sandra Figueroa', nota: 8 }
    ];

    var aprobados = alumnos.filter(function(alumno) {
        return alumno.nota >= 7;
    });

    var listaAprobados = document.getElementById("listaAprobados");

    aprobados.forEach(function(alumno) {
        var li = document.createElement("li");
        li.textContent = alumno.nombre + " - Nota: " + alumno.nota;
        listaAprobados.appendChild(li);
    });
});