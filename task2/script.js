let consoleLog = document.querySelector('#consoleLog');
consoleLog.addEventListener('click', (event) =>{
    alert('Метод console.log() для вывода сообщений в консоль');
})

let alertBlock = document.querySelector('#alert');
alertBlock.addEventListener('click', (event) =>{
    alert('Функция Alert() отображает диалоговое окно с сообщением и кнопкой ОК');
})

let promptBlock = document.querySelector('#prompt');
promptBlock.addEventListener('click', (event) =>{
    alert('Функция Prompt() отображает диалоговое окно с запросом на ввод текста');
})