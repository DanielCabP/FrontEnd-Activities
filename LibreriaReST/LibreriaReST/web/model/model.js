class Libro {
    constructor(titulo, autores) {
        this.id = Date.now();
        this.titulo = titulo;
        this.autores = autores;
    }
}

class Libreria {
    constructor() {
        this.libros = [];
    }

    agregarLibro(titulo, autores) {
        this.libros.push(new Libro(titulo, autores));
    }

    borrarLibro(id) {
        let index = this.libros.findIndex(function (l) {return l.id == id;});
        if (index >= 0) this.libros.splice(index, 1);
        else throw new Error('Libro no encontrado');
    }

    modificarLibro(id, titulo, autores) {
        let libro = this.libros.find(function (l) {return l.id == id;});
        if (libro) {
            libro.titulo = titulo;
            libro.autores = autores;
        } else {
            throw new Error(`Libro no encontrado ${id}`)
        }
    }

    verLibro(id) {
        let libro = this.libros.find(function (l) {return l.id == id;});
        if (libro) return libro;
        else throw new Error(`Libro no encontrado ${id}`)
    }
}
    
