let utils = require('./utils');

class Servicio {
    _id;
    nombre;

    constructor(nombre) {
        this._id = utils.genId();
        this.nombre = nombre;
        
    }

    imprimir() {
        console.log(`Servicio: ${this.nombre} [${this._id}]`)
    }
}

module.exports = Servicio;