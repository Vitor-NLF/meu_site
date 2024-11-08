
document.addEventListener('DOMContentLoaded', () => {
    const titulo2 = document.querySelector('.titulo-box-exp');
    titulo2.innerHTML = titulo2.textContent.split('').map(letter => `<span>${letter}</span>`).join('');
});
document.addEventListener('DOMContentLoaded', () => {
    const titulo3 = document.querySelector('.titulo-box-proj');
    titulo3.innerHTML = titulo3.textContent.split('').map(letter => `<span>${letter}</span>`).join('');
});

