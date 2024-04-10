document.getElementById("submit-btn").addEventListener("click", function() {
    var question = document.getElementById("question-input").value;
    var answerContainer = document.getElementById("answer");

    // Limpiar la respuesta anterior
    answerContainer.innerHTML = "";

    // Realizar una solicitud a la API de Wikipedia a través de un servidor proxy
    fetch("https://api.allorigins.win/get?url=" + encodeURIComponent("https://es.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=" + question))
    .then(response => {
        if (!response.ok) {
            throw new Error('No se pudo obtener la respuesta de Wikipedia.');
        }
        return response.json();
    })
    .then(data => {
        // Parsear la respuesta del servidor proxy
        const response = JSON.parse(data.contents);
        var pages = response.query.pages;
        var pageId = Object.keys(pages)[0];
        var extract = pages[pageId].extract;

        // Mostrar la respuesta en el contenedor de respuestas
        answerContainer.innerHTML = extract || "No se encontró una respuesta.";
    })
    .catch(error => {
        console.error("Error:", error);
        answerContainer.innerHTML = "No se pudo obtener la respuesta de Wikipedia.";
    });
});

document.getElementById("subjects-btn").addEventListener("click", function() {
    window.location.href = "asignaturas.html";
});

document.getElementById("help-btn").addEventListener("click", function() {
    window.location.href = "chatgpt.html";
});