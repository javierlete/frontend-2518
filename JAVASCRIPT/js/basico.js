'use strict';

'pepito de los palotes';

console.log(typeof (basico));

function basico() {

    //console.log(hola);

    const prueba = 'Prueba';

    console.log(prueba);

    let hola = 'Hola';

    hola = 'Hola a todos';

    console.log(hola);

    const numero = parseInt(prompt('Dime un número'));

    console.log('numero', numero, 'Tipo', typeof (numero), 'numero + 2', numero + 2);

    const fecha = new Date();

    console.log(typeof (fecha), fecha, fecha.getDate(), fecha.getMonth() + 1, fecha.getFullYear());
    console.log(fecha.toLocaleString());

    console.debug('Esto es información de DEBUG');
    console.log('Esto es información de LOG');
    console.warn('Esto es información de WARN');
    console.error('Esto es información de ERROR');

    saludar('Javier');
    saludar();
}
function saludar(nombre) {
    nombre = nombre || 'Desconocido';
    console.log('Hola ' + nombre);
}

function sentenciasControl() {
    const mes = 9;
    let dias;

    switch (+mes) {
        case 2:
            dias = 28;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            dias = 30;
            break;
        default:
            dias = 31;
    }

    console.log(mes, dias);

    let i = 1;
    while (i <= 10) {
        console.log(i);
        i++;
    }

    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

function arrays() {
    const arr = [1, 2, 3, 4, 5];

    arr[3] = 6;

    arr[5] = 10;

    arr[7] = 'asdfadsf';

    arr[10] = 1234;

    arr['hola'] = 'QUé tal';

    arr.adios = 'Pues vale';

    console.log(typeof (arr), arr);
    console.log(arr.length);

    for (let indice = 0; indice < arr.length; indice++) {
        console.log(arr[indice]);
    }

    for (let clave in arr) {
        console.log(clave, arr[clave]);
    }

    for (let valor of arr) {
        console.log(valor);
    }

    arr.forEach((valor, indice) => console.log('forEach', valor, indice)); //cadaUno);

    // function cadaUno(valor, indice) {
    //     console.log('forEach', valor, indice);
    // }

    const coleccion = [];

    coleccion.push(1);
    coleccion.push(2);
    coleccion.push(3);

    console.log(coleccion);

    const diccionario = [];

    diccionario.hola = 'hello';
    diccionario.perro = 'dog';

    console.log(diccionario);
    console.log(diccionario.hola);

    console.log(Object.keys(diccionario).length);
}

function objetos() {
    const objeto = {};

    console.log(typeof (objeto), objeto);

    objeto.propiedad = 'valor';
    objeto['otra'] = 'otro valor';

    objeto.metodo = function () {
        console.log(`
propiedad: ${this.propiedad}
otra: ${this.otra}
`);
        console.log('\n' +
            'propiedad: ' + this.propiedad + '\n' +
            'otra: ' + this.otra + '\n'
        );
    };

    console.log(typeof (objeto), objeto);
    objeto.metodo();
}

function prototipos() {
    function Persona(nombre, apellido) {
        this.nombre = nombre || null;
        this.apellido = apellido || null;
    }

    const javier = new Persona('Javier', 'Lete');
    const pepe = new Persona('Pepe', 'Pérez');

    console.log(javier);
    console.log(pepe);

    const persona = new Persona();

    console.log(!!persona.nombre);

    persona.nombre = 'asdfasd';
    persona.apellido = 'asdfasdf';

    console.log(!!persona.trabajo);

    persona.trabajo = 'Albañil';

    console.log(persona);

    console.log(!!persona.trabajo);

    console.log(javier.trabajo);
    console.log(!!javier.trabajo);

    Persona.prototype.informacion = function () {
        // console.log('Nombre', this.nombre);
        // console.log('Apellido', this.apellido);

        Object.keys(this).forEach(clave => console.log(clave, this[clave]));
    }

    javier.informacion();
    pepe.informacion();
    persona.informacion();

    console.log('Hola'.toUpperCase());

    String.prototype.toUpperCase = function () { return this + ' NO ME DA LA GANA DE CONVERTIRLO' };
    String.prototype.saludar = function () { return 'Hola ' + this };

    console.log('Hola'.toUpperCase());
    console.log('Javier'.saludar());
}

function clases() {
    class Persona {
        constructor(nombre, apellido) {
            this.nombre = nombre || null;
            this.apellido = apellido || null;
        }
        informacion() {
            // console.log('Nombre', this.nombre);
            // console.log('Apellido', this.apellido);
            Object.keys(this).forEach(clave => console.log(clave, this[clave]));
        }
    }

    const javier = new Persona('Javier', 'Lete');
    const pepe = new Persona('Pepe', 'Pérez');

    console.log(javier);
    console.log(pepe);

    const persona = new Persona();

    console.log(!!persona.nombre);

    persona.nombre = 'asdfasd';
    persona.apellido = 'asdfasdf';

    console.log(!!persona.trabajo);

    persona.trabajo = 'Albañil';

    console.log(persona);
}

clases();