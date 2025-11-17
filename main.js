// Função para copiar o seu e-mail
function copyEmail(event) {
    event.preventDefault();
    // SEU E-MAIL
    const email = 'lu1spaul0d3v@gmail.com'; 
    
    // Copia o e-mail para a área de transferência
    navigator.clipboard.writeText(email).then(function() {
        showToast();
    }).catch(function(err) {
        console.error('Não foi possível copiar o e-mail: ', err);
        alert('E-mail: ' + email);
    });
}

// Exibe a mensagem de confirmação (Toast)
function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    
    setTimeout(function() {
        toast.classList.remove('show');
    }, 3000);
}

// Ativa a navegação suave (Scroll-link) para links internos
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.scroll-link, .nav-links a').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Lógica de menu-toggle (para mobile)
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Fechar menu ao clicar fora (para mobile)
document.addEventListener('click', function(e) {
    const nav = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    if (!nav.contains(e.target) && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
});