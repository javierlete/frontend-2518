'use strict';

const URL = 'http://localhost:3000/productos/';

window.addEventListener('DOMContentLoaded', async () => {
    const respuesta = await fetch(URL);
    const productos = await respuesta.json();

    console.log(productos);

    productos.forEach(p => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <th>${p.id}</th>
            <td>${p.nombre}</td>
            <td>${p.descripcion}</td>
            <td>${p.precio} €</td>
            <td>
                <a href="#" class="btn btn-primary btn-sm">Editar</a>
                <a href="#" class="btn btn-danger btn-sm">Borrar</a>
            </td>`;
        
        document.querySelector('tbody').appendChild(tr);
    });
});