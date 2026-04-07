// 1. Seleciona os elementos necessários
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelectorAll('.nav-links a');

// 2. Adiciona o evento de clique para cada link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Quando clicar em qualquer link, desmarcamos o checkbox
        menuToggle.checked = false;
    });
});

console.log("BarberShop Z: Script de navegação carregado com sucesso! 💈");

// Opções para o observador (quando 10% do elemento aparecer, ele dispara)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Adiciona a classe que anima
        }
    });
}, observerOptions);

// Selecionamos o que queremos animar
const hiddenElements = document.querySelectorAll('.hero-content, .service-card, .container-title');
hiddenElements.forEach((el) => observer.observe(el));