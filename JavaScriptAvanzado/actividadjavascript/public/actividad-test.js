//const assert = require('chai');
//const Usuario = require('./usuario');
//const Servicio = require('./servicio');

describe("Servicio", function () {
    it("Crear", function () {
        const servicio = new Servicio();
        servicio.nombre = 'Ricardo';
        assert.equal(servicio.nombre, 'Ricardo');
    })
})

describe("Usuario", function () {
    it("Crear", function () {
        const usuario = new Usuario();
        usuario.nombre = 'Ricardo';
        usuario.apellido = 'Tesoriero';
        assert.equal(usuario.nombre, 'Ricardo');
        assert.equal(usuario.apellido,'Tesoriero');
    })

    it("Agregar servicio", function () {
        const usuario = new Usuario();
        usuario.nombre = 'Ricardo';
        usuario.apellido = 'Tesoriero';
        assert.equal(usuario.servicios.length, 0);
        const servicio = new Servicio();
        servicio.nombre = 'Servicio';
        usuario.agregarServicio(servicio);
        assert.equal(usuario.servicios.length, 1);
        assert.equal(usuario.servicios[0].nombre, servicio.nombre);
    })
    
    it("Eliminar servicio", function () {
        const usuario = new Usuario();
        usuario.nombre = 'Ricardo';
        usuario.apellido = 'Tesoriero';
        assert.equal(usuario.servicios.length, 0);

        const servicio = new Servicio();
        servicio.nombre = 'Servicio';
        usuario.agregarServicio(servicio);
        assert.equal(usuario.servicios.length, 1);

        usuario.eliminarServicio(servicio._id);
        assert.equal(usuario.servicios.length, 0);
    })
    
    it("Modificar servicio", function () {
        const usuario = new Usuario();
        usuario.nombre = 'Ricardo';
        usuario.apellido = 'Tesoriero';
        assert.equal(usuario.servicios.length, 0);

        const servicio = new Servicio();
        servicio.nombre = 'Servicio';
        usuario.agregarServicio(servicio);
        assert.equal(usuario.servicios.length, 1);

        usuario.modificarServicio(servicio._id,{nombre:'Servicio Modificado'});
        assert.equal(usuario.servicios.length, 1);
        assert.equal(usuario.servicios[0].nombre, 'Servicio Modificado');
    })
})
    