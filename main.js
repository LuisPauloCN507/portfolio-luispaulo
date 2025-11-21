// --- CONFIGURAÇÕES GERAIS ---
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+";
let interval = null;

// --- FUNÇÕES AUXILIARES ---

// Função de Efeito Hacker (Decodificação de Texto)
function runHackerEffect(target) {
    let iteration = 0;
    const originalText = target.dataset.value;
    
    clearInterval(interval);
    
    interval = setInterval(() => {
        target.innerText = originalText
            .split("")
            .map((letter, index) => {
                if(index < iteration) {
                    return originalText[index];
                }
                return letters[Math.floor(Math.random() * letters.length)];
            })
            .join("");
        
        if(iteration >= originalText.length) { 
            clearInterval(interval);
        }
        
        iteration += 1 / 3;
    }, 30);
}

// Função para copiar e-mail
function copyEmail(event) {
    event.preventDefault();
    const email = 'lu1spaul0d3v@gmail.com'; 
    
    navigator.clipboard.writeText(email).then(function() {
        showToast();
    }).catch(function(err) {
        console.error('Erro ao copiar: ', err);
        alert('E-mail: ' + email);
    });
}

// Notificação Toast
function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(function() {
        toast.classList.remove('show');
    }, 3000);
}

// --- EVENTOS DO DOM ---
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Ativa o Efeito Hacker no carregamento inicial
    const nameElement = document.querySelector(".gradient-text");
    if (nameElement) {
        runHackerEffect(nameElement);
        
        // 2. Ativa o Efeito Hacker ao passar o mouse (Hover)
        nameElement.onmouseover = event => {
            runHackerEffect(event.target);
        }
    }

    // 3. Configura Scroll Suave e Links da Navbar
    document.querySelectorAll('.scroll-link, .nav-links a').forEach(link => {
        link.addEventListener('click', e => {
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                const navLinks = document.querySelector('.nav-links');
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 4. Menu Mobile
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            document.querySelector('.nav-links').classList.toggle('active');
        });
    }

    // 5. Fechar menu ao clicar fora
    document.addEventListener('click', function(e) {
        const nav = document.querySelector('.navbar');
        const navLinks = document.querySelector('.nav-links');
        const menuToggle = document.querySelector('.menu-toggle');
        
        if (nav && navLinks && menuToggle) {
            if (!nav.contains(e.target) && !menuToggle.contains(e.target) && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        }
    });
});