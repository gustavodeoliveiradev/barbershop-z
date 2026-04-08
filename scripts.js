// ==========================================
// BARBER SHOP Z - JavaScript
// ==========================================

document.addEventListener('DOMContentLoaded', () => {

    // 1. ELEMENTOS DO DOM
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelectorAll('.nav-links a');
    const themeBtn = document.getElementById('theme-toggle-btn');
    const body = document.body;
    const contactForm = document.getElementById('contactForm');

    // 2. NAVEGAÇÃO MOBILE
    // Fecha o menu ao clicar em qualquer link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menuToggle.checked) {
                menuToggle.checked = false;
            }

            // Atualiza classe active
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // 3. TEMA CLARO/ESCURO
    // Carrega tema salvo
    const loadTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            body.classList.add('light-mode');
            themeBtn.checked = true;
        } else {
            body.classList.remove('light-mode');
            themeBtn.checked = false;
        }
    };

    // Alterna tema
    themeBtn.addEventListener('change', () => {
        body.classList.toggle('light-mode');

        const isLight = body.classList.contains('light-mode');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });

    // Inicializa tema
    loadTheme();

    // 4. ANIMAÇÃO DE SCROLL (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, observerOptions);

    // Seleciona elementos para animar
    const animatedElements = document.querySelectorAll(
        '.hero-content, .service-card, .container-title, .testimonial-card'
    );

    animatedElements.forEach(el => observer.observe(el));

    // 5. FORMULÁRIO DE CONTATO
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const telefone = document.getElementById('telefone').value;
            const mensagem = document.getElementById('mensagem').value;

            // Simulação de envio
            const btn = contactForm.querySelector('button');
            const originalText = btn.textContent;

            btn.textContent = 'Enviando...';
            btn.disabled = true;

            setTimeout(() => {
                alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.`);
                contactForm.reset();
                btn.textContent = originalText;
                btn.disabled = false;
            }, 1500);
        });
    }

    // 6. SCROLL SUAVE PARA ÂNCORAS
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    console.log("✂️ BarberShop Z: Sistema carregado com sucesso!");
});