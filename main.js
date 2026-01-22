document.addEventListener("DOMContentLoaded", () => {
  console.log("Página cargada correctamente");
});
/* Esto es para el carrusel del fondo del Hero */
// 1. Definimos un objeto con la imagen y su enlace correspondiente
const colecciones = [
    {
        img: 'url("https://media.blackandwhite-ff.com/10000/10000/b6e96b4a-21c1-47b8-bfb2-c22bc1110717_Content_Banner_800x400-HERO.jpg")',
        link: '/productos.html' // Enlace correspondiente -> Esta imagen deberia mandar a hombres
    },
    {
        img: 'url("https://estaticos-cdn.prensaiberica.es/clip/7fddbba4-0c83-4dde-8847-c42e2035a039_alta-libre-aspect-ratio_default_0.jpg")',
        link: '/mujer/mujer.html' // -> este enlace a mujeres
    },
    {
        img: 'url("https://media.gq.com.mx/photos/5be9e3ca4577ab26054abb1b/16:9/w_1792,h_1008,c_limit/tenis_correr_7254.jpg")',
        link: '/productos.html' // -> Este enlace a Hombres
    },
    {
        img: 'url("https://img.freepik.com/foto-gratis/retrato-joven-mujer-deportiva-atando-sus-zapatillas-deporte-tomar-su-sesion-diaria-jogging_197531-22387.jpg?semt=ais_hybrid&w=740&q=80")',
        link: '/mujer/mujer.html' // -> Este enlace a mujeres
    }
];

let indiceActual = 0;
const heroSection = document.querySelector('.hero');
const heroBtn = document.querySelector('.hero .btn'); // Seleccionamos el botón

function cambiarFondo() {
    indiceActual = (indiceActual + 1) % colecciones.length;
    const datosNuevos = colecciones[indiceActual];
    // Cambiar la imagen de fondo
    heroSection.style.backgroundImage = datosNuevos.img;
    // Cambiar el enlace del botón
    heroBtn.setAttribute('href', datosNuevos.link);
}

// Iniciar carrusel automático cada 5 segundos
setInterval(cambiarFondo, 5000);

// Establecer el estado inicial al cargar la página
window.addEventListener('load', () => {
    heroSection.style.backgroundImage = colecciones[0].img;
    heroBtn.setAttribute('href', colecciones[0].link);
});
/* Aqui termina */
/* Aqui inicia el carrusel de productos */
function scrollCarousel(direction) {
  const grid = document.getElementById('productGrid');
  // Calculamos el ancho de una tarjeta buscando la primera disponible
  const card = grid.querySelector('.product-card');
  const scrollAmount = (card.offsetWidth + 20) * direction; // 20 es el gap
  
  grid.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  });
}

// Opcional: Pausar el scroll si el usuario usa el mouse directamente
let isDown = false;
let startX;
let scrollLeft;

const grid = document.getElementById('productGrid');

grid.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - grid.offsetLeft;
  scrollLeft = grid.scrollLeft;
});

grid.addEventListener('mouseleave', () => isDown = false);
grid.addEventListener('mouseup', () => isDown = false);

grid.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - grid.offsetLeft;
  const walk = (x - startX) * 2;
  grid.scrollLeft = scrollLeft - walk;
});
/* Aqui termina el carrusel de productos */
/* Esto es para la animación de los productos destacados */
// Seleccionamos el contenedor grid para usar delegación de eventos
const gridContainer = document.getElementById('productGrid');

gridContainer.addEventListener('mousedown', (e) => {
  // Buscamos la tarjeta de producto más cercana al clic
  const card = e.target.closest('.product-card');
  
  if (card) {
    const img = card.querySelector('img');

    // 1. Animación de Salto (Efecto físico)
    img.animate([
      { transform: 'scale(1)' },
      { transform: 'scale(1.1)' },
      { transform: 'scale(1)' }
    ], {
      duration: 300,
      easing: 'ease-out'
    });

    // 2. Animación de Explosión de Brillo
    img.animate([
      { filter: 'drop-shadow(0 0 0px var(--glow-color)) brightness(1)' },
      { filter: 'drop-shadow(0 0 30px var(--glow-color)) brightness(1.5)' },
      { filter: 'drop-shadow(0 0 0px var(--glow-color)) brightness(1)' }
    ], {
      duration: 400,
      easing: 'ease-in-out'
    });
  }
});

//funciones futuras

// Cart Logic Simple
let cartCount = 0;
const cartBadge = document.querySelector('#cart-count');
const addButtons = document.querySelectorAll('.add-cart-btn');

addButtons.forEach(button => {
    button.addEventListener('click', function (e) {
        cartCount++;
        cartBadge.textContent = cartCount;
        // Opcional: Añade una animación simple al carrito flotante
        const floatingCart = document.querySelector('#floating-cart');
        floatingCart.classList.add('bounce');
        setTimeout(() => floatingCart.classList.remove('bounce'), 500);
    });
});