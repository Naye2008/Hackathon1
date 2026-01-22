// Smooth Scroll
document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in on Scroll
const sections = document.querySelectorAll('.animate-section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// Cart Logic
let cartCount = 0;
const cartBadge = document.querySelector('.cart-icon .badge');
const addButtons = document.querySelectorAll('.add-cart-btn');

addButtons.forEach(button => {
    button.addEventListener('click', function (e) {
        const card = this.closest('.product-card');
        const clone = card.cloneNode(true);
        clone.classList.add('flying-item');
        document.body.appendChild(clone);

        const cardRect = card.getBoundingClientRect();
        const cartRect = document.querySelector('.cart-icon').getBoundingClientRect();

        clone.style.left = `${cardRect.left}px`;
        clone.style.top = `${cardRect.top}px`;
        clone.style.width = `${cardRect.width}px`;
        clone.style.height = `${cardRect.height}px`;

        setTimeout(() => {
            clone.style.left = `${cartRect.left}px`;
            clone.style.top = `${cartRect.top}px`;
            clone.style.width = '50px';
            clone.style.height = '50px';
            clone.style.opacity = '0';
            clone.style.transform = 'scale(0.5)';
        }, 10);

        setTimeout(() => {
            clone.remove();
            cartCount++;
            cartBadge.textContent = cartCount;
        }, 600);
    });
});