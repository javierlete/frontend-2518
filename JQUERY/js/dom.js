window.addEventListener('DOMContentLoaded', () => {
    const h1s = document.querySelectorAll('h1');
    h1s.forEach(h1 => {
        h1.innerHTML = h1.innerHTML.toUpperCase();
    })

    const inputNombre = document.getElementById('nombre');
    const botonSaludar = document.getElementById('saludar');
    const spanMensaje = document.getElementById('mensaje');
    const form = document.querySelector('form');

    botonSaludar.addEventListener('click', () => {
        console.log('Se ha hecho click');
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        document.querySelectorAll('span.error').forEach((error) => {
            error.remove();
        });
        
        if (form.checkValidity()) {
            inputNombre.classList.remove('error');
            spanMensaje.innerText = 'Hola ' + inputNombre.value;
        } else {
            inputNombre.classList.add('error');

            inputNombre.focus();

            const spanError = document.createElement('span');
            
            spanError.classList.add('error');
            spanError.innerText = 'Este campo es obligatorio';

            //form.appendChild(spanError);
            inputNombre.insertAdjacentElement('afterend', spanError);
        }
    });

    console.log(inputNombre);
    console.log(botonSaludar);
    console.log(spanMensaje);
});