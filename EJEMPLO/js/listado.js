'use strict';

const URL = 'http://localhost:3000/productos/';

window.addEventListener('DOMContentLoaded', async () => {
    const respuesta = await fetch(URL);
    const productos = await respuesta.json();

    console.log(productos);

    productos.forEach(producto => {
        nuevaLinea(producto);
    });

    document.querySelector('form').addEventListener('submit', async e => {
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const descripcion = document.querySelector('#descripcion').value;
        const precio = document.querySelector('#precio').value;

        const producto = { nombre, descripcion, precio };

        const respuesta = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(producto)
        });

        if(respuesta.ok) {
            alert('Producto añadido');

            const producto = await respuesta.json();

            nuevaLinea(producto);
        } else {
            alert('No se ha podido añadir');
        }
    });
});

function nuevaLinea(producto) {
    const tr = document.createElement('tr');

    tr.innerHTML = `
            <th>${producto.id}</th>
            <td>${producto.nombre}</td>
            <td>${producto.descripcion}</td>
            <td>${producto.precio} €</td>
            <td>
                <a href="#" class="btn btn-primary btn-sm">Editar</a>
                <a href="#" class="btn btn-danger btn-sm">Borrar</a>
            </td>`;

    document.querySelector('tbody').appendChild(tr);
}
