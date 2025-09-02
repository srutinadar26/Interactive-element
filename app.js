const heading = document.querySelector('h1');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    heading.style.color = '#8AA29E';
    heading.style.backgroundColor = '#686963'
    heading.textContent = 'Color Changed!';
});
