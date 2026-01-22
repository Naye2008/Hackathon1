document.addEventListener("DOMContentLoaded", () => {
  console.log("Página cargada correctamente");
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