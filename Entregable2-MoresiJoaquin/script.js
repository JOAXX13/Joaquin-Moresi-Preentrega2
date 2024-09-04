const deportesArray = JSON.parse(localStorage.getItem('deportes')) || [];

document.getElementById('deportesForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const deporte = document.getElementById('deporte').value.trim();
    const anios = parseInt(document.getElementById('anios').value.trim(), 10);

    if (nombre && deporte && anios) {
        const registro = { nombre, deporte, anios };
        deportesArray.push(registro);
        localStorage.setItem('deportes', JSON.stringify(deportesArray));

        mostrarResultado(registro);
        limpiarFormulario();
    } else {
        alert("Por favor, completa todos los campos.");
    }
});

const mostrarResultado = (registro) => {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML += `<p>${registro.nombre} ha practicado ${registro.deporte} durante ${registro.anios} años.</p>`;
};

const limpiarFormulario = () => {
    document.getElementById('deportesForm').reset();
};
