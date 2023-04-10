var assert = require("chai").assert;
let chai = require('chai');
let chaiHttp = require('chai-http');

chai.use(chaiHttp);
const url = 'http://localhost:3000/api';

describe("Libreria", function () {
    it("Agregar libro", function (done) {
        chai.request(url)
            .post('/libros')
            .send({ titulo: 'Título', autores: 'Autores' })
            .end(function (err, res) {

                if (err) done(err); else {
                    assert.equal(res.status, 200);
                    assert.equal(res.body.titulo, 'Título');
                    assert.equal(res.body.autores, 'Autores');
                    assert.isDefined(res.body.id);
                    done()
                }
            })
    });
});
