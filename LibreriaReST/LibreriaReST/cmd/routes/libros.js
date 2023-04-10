var express = require('express');
var router = express.Router();

let model = require('../model/model.js');

/* GET users listing. */
router.get('/', function (req, res, next) {
    return res.json(model.libros);
});

router.get('/id/:id', function (req, res, next) {
    try {
        let libro = model.verLibro(req.params.id);
        return res.json(libro);
    } catch (e) {
        res.statusMessage = e.message;
        return res.status(404).send();
    }
});


router.delete('/id/:id', function (req, res, next) {
    try {
        model.borrarLibro(req.params.id);
        return res.status(200).send();
    } catch (e) {
        res.statusMessage = e.message;
        return res.status(404).send();
    }
});

router.post('/', function (req, res, next) {
    let libro = model.agregarLibro(req.body.titulo, req.body.autores)
    return res.json(libro);
});

router.put('/id/:id', function (req, res, next) {
    try {
        let libro = model.modificarLibro(req.params.id, req.body.titulo, req.body.autores);
        return res.status(200).send(libro);
    } catch (e) {
        res.statusMessage = e.message;
        return res.status(404).send();
    }
});

module.exports = router;