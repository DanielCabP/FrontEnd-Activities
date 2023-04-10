var assert = require("chai").assert;
var model = require('../model/model');

describe("Libreria", function () {
    it("Agregar libro", function () {
        assert.equal(model.libros.length, 0);
        model.agregarLibro('Titulo', 'Autores');
        assert.equal(model.libros.length, 1);
        assert.equal(model.libros[0].titulo, 'Titulo');
        assert.equal(model.libros[0].autores, 'Autores');
        assert.isDefined(model.libros[0].id);
    }); 

    it("Modificar libro", function () {
        model.modificarLibro(model.libros[0].id,'Titulo2', 'Autores2');
        assert.equal(model.libros[0].titulo, 'Titulo2');
        assert.equal(model.libros[0].autores, 'Autores2');
        assert.isDefined(model.libros[0].id);
    });

    it("Borrar libro", function () {
        model.borrarLibro(model.libros[0].id)
        assert.isUndefined(model.libros[0])
    });
});
