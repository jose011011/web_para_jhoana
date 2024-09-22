// script.js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const mensaje = document.getElementById('mensaje');
const cancion = document.getElementById('cancion');

// Dibujar flores amarillas
function dibujarFlores() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 10; i++) {
        ctx.beginPath();
        ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, 20, 0, 2 * Math.PI);
        ctx.fillStyle = 'yellow';
        ctx.fill();
    }
}

// Mostrar mensaje
function mostrarMensaje() {
    mensaje.textContent = 'Feliz día de las madres!';
}

// Reproducir canción
function reproducirCancion() {
    cancion.play();
}

// Inicializar
dibujarFlores();
mostrarMensaje();
reproducirCancion();