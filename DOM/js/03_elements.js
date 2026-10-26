const title = document.querySelector('#shopTitle');
console.log(title.textContent);

title.textContent = 'New Apple Store';

title.classList.add('highLight');

title.classList.remove('highLight');

title.classList.toggle('highLight'); // Toggle говорит то, что если класс есть, он его убирает, если нет - добавляет

title.classList.toggle('highLight'); // Еще один пример использования toggle

// Есть - Удаляет, нет - Добавляет (toggle)З