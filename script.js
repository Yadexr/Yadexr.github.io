

document.getElementById("subjects-btn").addEventListener("click", function() {
    window.location.href = "asignaturas.html";
});

document.getElementById("help-btn").addEventListener("click", function() {
    window.location.href = "chatgpt.html";
});
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("courses-btn").addEventListener("click", function() {
        window.location.href = "cursos.html"; // Reemplaza "cursos.html" por la ruta de tu página de cursos
    });

    // Función para regresar a la página index.html
    document.getElementById("back-btn").addEventListener("click", function() {
        window.location.href = "index.html";
    });
});