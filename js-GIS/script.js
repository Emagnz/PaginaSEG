document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animacion-al-scroll').forEach(el => {
        observer.observe(el);
    });

    const principalDiv = document.getElementById('principal');

    window.addEventListener('scroll', () => {
        if ((principalDiv.getBoundingClientRect().top + principalDiv.offsetHeight / 2) < (window.innerHeight / 2)) {
            principalDiv.classList.add('fondo-azul');
        } else {
            principalDiv.classList.remove('fondo-azul');
        }
    });
});


let boton_frontal = document.querySelectorAll('.flip-btn');

boton_frontal.forEach(boton => {
    boton.addEventListener('click', () => {
        let cambiar_perspectiva = boton.closest('.carrera-flipped');
        if (cambiar_perspectiva.classList.contains('flipped')) {
            cambiar_perspectiva.classList.remove('flipped');
        } else {
            cambiar_perspectiva.classList.add("flipped");
        }
    });
});