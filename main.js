// Função para copiar o seu e-mail
function copyEmail(event) {
    event.preventDefault();
    const email = 'lu1spaul0d3v@gmail.com'; 
    
    navigator.clipboard.writeText(email).then(function() {
        showToast();
    }).catch(function(err) {
        console.error('Erro ao copiar: ', err);
        alert('E-mail: ' + email); // Fallback caso falhe
    });
}

// Exibe a notificação (Toast)
function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    
    setTimeout(function() {
        toast.classList.remove('show');
    }, 3000);
}

// Scroll Suave
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.scroll-link, .nav-links a').forEach(link => {
        link.addEventListener('click', e => {
            // Se for link externo (Github/Linkedin), não faz scroll
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                // Fecha o menu mobile se estiver aberto
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
});

// Menu Mobile Toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Fechar menu ao clicar fora
document.addEventListener('click', function(e) {
    const nav = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');
    
    // Verifica se o clique não foi na navbar nem no botão de menu
    if (!nav.contains(e.target) && !menuToggle.contains(e.target) && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
});