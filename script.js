document.getElementById("submit-btn").addEventListener("click", function() {
    var question = document.getElementById("question-input").value;
    var answerContainer = document.getElementById("answer");

    // Limpiar la respuesta anterior
    answerContainer.innerHTML = "";

    // Realizar una solicitud a la API de Wikipedia
    fetch("https://es.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=" + question)
    .then(response => response.json())
    .then(data => {
        var pages = data.query.pages;
        var pageId = Object.keys(pages)[0];
        var extract = pages[pageId].extract;

        // Mostrar la respuesta en el contenedor de respuestas
        answerContainer.innerHTML = extract;
    })
    .catch(error => {
        console.log("Error:", error)
        answerContainer.innerHTML = "No se encontró una respuesta.";
    });
});

document.getElementById("subjects-btn").addEventListener("click", function() {
    window.location.href = "asignaturas.html";
});

document.getElementById("help-btn").addEventListener("click", function() {
    window.location.href = "chatgpt.html"; // Cambia "ayuda.html" por la ruta de tu página de ayuda
});