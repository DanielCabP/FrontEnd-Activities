//Comentar estas dos lineas  en caso de ejecutar desde el navegador, ya que assert ya es declarado en el .html
var assert = require("chai").assert; 
var multiplicar = require("./model");

describe("Multiplicar", function(){
    it("Multiplica los valores", function () {
        assert.equal(multiplicar(2, 3), 6);
    });
});

describe("Propiedad conmutativa", function(){
    it("Multiplica los valores", function () {
        assert.equal(multiplicar(2, 3), multiplicar(3, 2));
    });
});