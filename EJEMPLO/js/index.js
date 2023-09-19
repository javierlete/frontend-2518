'use strict';

const URL = 'http://localhost:3000/productos/';

window.addEventListener('DOMContentLoaded', async () => {
    const respuesta = await fetch(URL);
    const productos = await respuesta.json();

    console.log(productos);

    productos.forEach(p => {
        const card = document.createElement('div');
        card.className = 'col';

        card.innerHTML =
            `<div class="card h-100">
                <img src="https://picsum.photos/200/150?${p.id}" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">${p.nombre}</h5>
                    <p class="card-text">${p.descripcion}</p>
                </div>
                <div class="card-footer">
                    <small class="text-body-secondary">${p.precio} €</small>
                </div>
            </div>`;
        
        document.querySelector('#productos').appendChild(card);
    });
});