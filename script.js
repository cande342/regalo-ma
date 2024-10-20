/// Selección de elementos
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Función para cerrar el menú
function closeMenu() {
  navLinks.classList.remove('show'); // Remueve la clase que muestra el menú
}

// Toggle del menú hamburguesa
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show'); // Alternar la visibilidad del menú
});

// Agregar evento de clic a los enlaces del menú
const links = navLinks.querySelectorAll('a'); // Selecciona todos los enlaces del menú
links.forEach(link => {
  link.addEventListener('click', closeMenu); // Cerrar menú al hacer clic en un enlace
});


window.addEventListener('scroll', () => {
    const bienvenida = document.querySelector('.animate-text');
    const sectionPos = document.querySelector('#bienvenida').offsetTop;
    if (window.scrollY > sectionPos - 300) {
      bienvenida.style.opacity = '1';
      bienvenida.style.transform = 'translateY(0)';
    }
  });

// Seleccionamos todos los cuadrados
const mensajes = document.querySelectorAll('.mensaje');

// Agregamos el evento de clic a cada cuadrado
mensajes.forEach((mensaje) => {
  mensaje.addEventListener('click', () => {
    // Remover la clase 'active' de todos los cuadrados
    mensajes.forEach(m => m.classList.remove('active'));
    // Añadir la clase 'active' al cuadrado que se clicó
    mensaje.classList.toggle('active');
  });
});


const galeriaContainer = document.querySelector('.galeria-container');
const imagenes = document.querySelectorAll('.galeria-imagen');

let index = 0; // Índice inicial

// Función para mostrar la siguiente imagen
function siguienteImagen() {
  index = (index + 1) % imagenes.length; // Aumenta el índice o vuelve al inicio
  galeriaContainer.scrollTo({
    left: imagenes[index].offsetLeft,
    behavior: 'smooth' // Desplazamiento suave
  });
}

// Puedes agregar un temporizador para mostrar automáticamente la siguiente imagen cada ciertos segundos
setInterval(siguienteImagen, 3000); // Cambia la imagen cada 3 segundos


// Mostrar mensaje al hacer clic en el botón
const mostrarMensajeButton = document.getElementById('mostrar-mensaje');
const mensajeDesplegable = document.getElementById('mensaje-desplegable');

mostrarMensajeButton.addEventListener('click', () => {
  mensajeDesplegable.classList.toggle('oculto'); // Alternar la clase para mostrar/ocultar
});

// Seleccionar el audio y el botón
const audio = document.getElementById('audio');
const botonPlay = document.getElementById('boton-play');

// Controlar la reproducción de audio al hacer clic en el botón
botonPlay.addEventListener('click', () => {
    if (audio.paused) {
        audio.play(); // Reproducir el audio
        botonPlay.textContent = 'Pausar'; // Cambiar el texto del botón
    } else {
        audio.pause(); // Pausar el audio
        botonPlay.textContent = 'Reproducir'; // Cambiar el texto del botón
    }
});

// Opcional: Cambiar el texto del botón cuando el audio termina
audio.addEventListener('ended', () => {
    botonPlay.textContent = 'Reproducir'; // Reiniciar el botón cuando termina
});