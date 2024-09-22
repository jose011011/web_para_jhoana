// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Él la estaba esperando con una flor amarilla", time: 2 },
  { text: "Ella lo estaba soñando con la luz en su pupila", time: 9 },
  { text: "Y el amarillo del Sol iluminaba la esquina", time: 17 },
  { text: "Lo sentía tan cercano, lo sentía desde niña", time: 24  },
  { text: "Ella sabía que él sabía", time: 31 },
  { text: "Que algún día pasaría", time: 32 },
  { text: "Que vendría a buscarla", time: 33 },
  { text: "Con sus flores amarillas", time: 34 },
  { text: "No te apures, no detengas", time: 41 },
  { text: "El instante del encuentro", time: 43 },
  { text: "Está dicho que es un hecho", time: 48 },
  { text: "No la pierdas, no hay derecho", time: 49 },
  { text: "No te olvides que la vida", time: 51 },
  { text: "Casi nunca está dormida", time: 54 },
  { text: "En ese bar tan desierto nos esperaba el encuentro", time: 78 },
  { text: "Ella llegó en limusina amarilla por supuesto", time: 85 },
  { text: "Él se acercó de repente, la miro tan de frente", time: 94 },
  { text: "toda una vida soñando y no pudo decir nada", time: 103 },
  { text: "Ella sabía que él sabía", time: 107 },
  { text: "Que algún día pasaría", time: 110 },
  { text: "Que vendría a buscarla", time: 111.5 },
  { text: "Con sus flores amarillas", time: 114 },
  { text: "No te apures, no detengas", time: 120 },
  { text: "El instante del encuentro", time: 122 },
  { text: "Está dicho que es un hecho", time: 125 },
  { text: "No la pierdas, no hay derecho", time: 127 },
  { text: "No te olvides que la vida", time: 128 },
  { text: "Casi nunca está dormida", time: 132 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);