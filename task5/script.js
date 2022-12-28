const duplicateField = document.querySelector('#duplicateField');
        myForm.onsubmit = (e) => {
            const enterText = myForm.text.value;
            duplicateField.textContent = enterText;
            myForm.reset();
            console.log(enterText);
            e.preventDefault()
        }