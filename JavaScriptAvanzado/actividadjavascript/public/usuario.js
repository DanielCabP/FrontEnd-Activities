const Persona = require('./persona')

class Usuario extends Persona {
    servicios = [];

    constructor(nombre, apellido) {
        super(nombre, apellido)
    }

    isAdmin() { return false; }

    agregarServicio(s) {
        this.servicios.push(s);
    }

    eliminarServicio(_id) {
        let id = this.servicios.findIndex(s => s._id == _id)
        this.servicios.splice(id, 1);
    }

    modificarServicio(_id, s2) {
        let s1 = this.servicios.find(s => s._id == _id);
        Object.assign(s1, s2);
    }

    imprimir() {
        console.log(`Usuario: ${this.nombreCompleto}[${this._id}] Servicios:`);
        for (let s of this.servicios) {
            s.imprimir();
        }
    }
}

module.exports = Usuario;