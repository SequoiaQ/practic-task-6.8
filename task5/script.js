const textBlock = document.querySelector('text')

    elmLabel.addEventListener('mouseup', event => {
         {
                event.preventDefault();
                duplicateField.textContent = elmLabel.value;
                elmLabel.value = ' ';
        }
    });
