const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Quando entra na tela, adiciona a classe 'visible'
            observer.unobserve(entry.target); // Para de observar após adicionar a classe
        }
    });
}, {
    threshold: 0.5 // A caixa deve estar 50% visível para o efeito acontecer
});

// Seleciona todas as boxes que você quer observar
const boxes = document.querySelectorAll('.box-experiencias, .box-experiencias2, .box-projetos');

// Começa a observar cada uma delas
boxes.forEach(box => observer.observe(box));
