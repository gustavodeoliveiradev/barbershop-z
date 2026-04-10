// ==========================================
// BARBER SHOP Z - JavaScript
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    
    // Elementos
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelectorAll('.nav-links a');
    const themeBtn = document.getElementById('theme-toggle-btn');
    const body = document.body;
    const contactForm = document.getElementById('contactForm');
    const heroBg = document.querySelector('.hero-bg');

    // 1. NAVEGAÇÃO MOBILE
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menuToggle.checked) {
                menuToggle.checked = false;
            }
            
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // 2. TEMA CLARO/ESCURO
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

    themeBtn.addEventListener('change', () => {
        body.classList.toggle('light-mode');
        const isLight = body.classList.contains('light-mode');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });

    loadTheme();

    // 3. ANIMAÇÃO DE SCROLL
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

    const animatedElements = document.querySelectorAll(
        '.hero-content, .service-card, .container-title, .testimonial-card'
    );

    animatedElements.forEach(el => observer.observe(el));

    // 4. PARALLAX NO HERO
    let ticking = false;
    
    const updateParallax = () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.3;
        
        if (heroBg) {
            heroBg.style.transform = `translate3d(0, ${rate}px, 0)`;
        }
        
        ticking = false;
    };

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });

    // 5. FORMULÁRIO DE CONTATO
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nome = document.getElementById('nome').value;
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

    // 6. SCROLL SUAVE
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

    // 7. PAUSAR ANIMAÇÕES QUANDO ABA INATIVA
    document.addEventListener('visibilitychange', () => {
        const whatsappBtn = document.querySelector('.whatsapp-float');
        if (whatsappBtn) {
            whatsappBtn.style.animationPlayState = document.hidden ? 'paused' : 'running';
        }
    });

    console.log("✂️ BarberShop Z: Dia 7 - Tudo funcionando!");
});