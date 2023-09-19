'use strict';

const URL = 'http://localhost:3000/productos/';

let tabla;

window.addEventListener('DOMContentLoaded', async () => {
    const respuesta = await fetch(URL);
    const productos = await respuesta.json();

    console.log(productos);

    productos.forEach(producto => {
        nuevaLinea(producto);
    });

    asignarDataTables();

    document.querySelector('form').addEventListener('submit', async e => {
        e.preventDefault();

        await guardar();
    });
});

async function guardar() {
    const id = document.querySelector('#id').value;
    const nombre = document.querySelector('#nombre').value;
    const descripcion = document.querySelector('#descripcion').value;
    const precio = document.querySelector('#precio').value;

    const producto = { nombre, descripcion, precio };

    let peticion = URL;

    if (id) {
        producto.id = id;

        peticion += id;
    }

    const respuesta = await fetch(peticion, {
        method: id ? 'PUT' : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(producto)
    });

    if (respuesta.ok) {
        const producto = await respuesta.json();

        eliminarDataTables();

        if (id) {
            modificarLinea(producto);
        }
        else { 
            nuevaLinea(producto); 
        }

        asignarDataTables();

        const form = document.querySelector('form');
        
        form.classList.remove('was-validated');
        form.reset();
    } else {
        alert('No se ha podido guardar');
    }
}

function nuevaLinea(producto) {
    const tr = document.createElement('tr');
    tr.dataset.id = producto.id;

    tr.innerHTML = `
            <th>${producto.id}</th>
            <td>${producto.nombre}</td>
            <td>${producto.descripcion}</td>
            <td>${producto.precio} €</td>
            <td>
                <a href="javascript:editar(${producto.id})" class="btn btn-primary btn-sm">Editar</a>
                <a href="javascript:borrar(${producto.id})" class="btn btn-danger btn-sm">Borrar</a>
            </td>`;

    document.querySelector('tbody').appendChild(tr);
}
function modificarLinea(producto) {
    const tr = document.querySelector(`tr[data-id="${producto.id}"]`);

    tr.querySelector('td:first-of-type').innerText = producto.nombre;
    tr.querySelector('td:nth-of-type(2)').innerText = producto.descripcion;
    tr.querySelector('td:nth-of-type(3)').innerText = producto.precio + ' €';
}

async function borrar(id) {
    const respuesta = await fetch(`${URL}${id}`, {
        method: 'DELETE'
    });

    if (respuesta.ok) {
        eliminarDataTables();

        document.querySelector(`tr[data-id="${id}"]`).remove();
        
        asignarDataTables();
    }
}

async function editar(id) {
    const respuesta = await fetch(`${URL}${id}`);
    const producto = await respuesta.json();

    document.querySelector('#id').value = producto.id;
    document.querySelector('#nombre').value = producto.nombre;
    document.querySelector('#descripcion').value = producto.descripcion;
    document.querySelector('#precio').value = producto.precio;
}

function asignarDataTables() {
    tabla = new DataTable('table', {
        language: {
            url: '../json/es-ES.json',
        },
    });
}

function eliminarDataTables() {
    if(tabla) {
        tabla.destroy();
    }
}