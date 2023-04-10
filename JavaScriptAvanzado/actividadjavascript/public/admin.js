const Usuario = require('./usuario')

class Admin extends Usuario {

    constructor(nombre, apellido) {
        super(nombre, apellido)
    }

    isAdmin() { return true; }

    imprimir() {
        console.log("Administrador: " + this.nombreCompleto())
    }
}
    
module.exports = Admin;