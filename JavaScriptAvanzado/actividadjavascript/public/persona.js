let utils = require('./utils');

class Persona {
    _id;
    nombre = 'Sin Nombre';
    apellido = 'Ni Apellido';

    constructor(nombre, apellido) {
        this._id = utils.genId();
        this.nombre = nombre;
        this.apellido = apellido;
    }

    get nombreCompleto() {
        return this.apellido.toUpperCase() + ', ' + this.nombre;
    }
}

module.exports = Persona;
