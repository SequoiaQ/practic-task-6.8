const link = document.querySelector('a');

link.addEventListener('click',  (event) => {
    link.textContent = prompt('Поменять текст ссылки на:', );
    event.preventDefault();
})
