const nameInput = document.querySelector('#nameInput');
const helloButton = document.querySelector('#helloButton');
const greeting = document.querySelector('#greeting');

helloButton.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (name === '') {
        greeting.textContent = 'Please enter your name.';
        return;
    }

    greeting.textContent = `Hello, ${name}!`;
});