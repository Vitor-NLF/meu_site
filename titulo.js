document.addEventListener('DOMContentLoaded', () => {
    const titulo = document.querySelector('.titulo-box');
    titulo.innerHTML = titulo.textContent.split('').map(letter => `<span>${letter}</span>`).join('');
});


document.addEventListener('DOMContentLoaded', () => {
    const titulo = document.querySelector('.titulo-box-experiencias');
    titulo.innerHTML = titulo.textContent.split('').map(letter => `<span>${letter}</span>`).join('');
});