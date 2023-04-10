class LibreriaPresenter {
    constructor(proxy, view) {
        this.proxy = proxy;
        this.view = view;
        this.libro = null;
        this.status = 'Inicio'
    }

    async borrarClick() {
        if (this.libro) {
            let response = await this.proxy.borrarLibro(this.libro.id);
            this.selectLibro(null);
        if (!response.ok) this.status = `ERROR: Error al borrar`;
        this.refresh();
        } else this.status = `ERROR: No hay libro seleccionado`;
    }

    async guardarClick() {
        let titulo = document.getElementById('titulo').value;
        let autores = document.getElementById('autores').value;
        let respuesta;
        if (this.libro) {
            respuesta = await this.proxy.modificarLibro(this.libro.id, titulo, autores);
            this.status = 'Modificado';
        } else {
            respuesta = await this.proxy.agregarLibro(titulo, autores);
            this.status = 'Agregado';
        }

        if (!respuesta.ok) this.status = 'ERROR: ' + this.status;
            this.selectLibro(null);
            this.refresh();
    }

    async seleccionarLibroClick(id) {
        if (this.libro?.id == id) {this.selectLibro(null);}
        else {
        let response = await this.proxy.verLibro(id);
        if (response.ok) {
        this.selectLibro(await response.json())
        this.status = "Cargado"
        } else this.status = "ERROR: Cargado"
        }
        this.refresh();
        }
    
    selectLibro(libro) {
        this.libro = libro;
        if (libro) {
            document.getElementById('titulo').value = this.libro.titulo;
            document.getElementById('autores').value = this.libro.autores;
        } else {
            document.getElementById('titulo').value = '';
            document.getElementById('autores').value = '';
        }
    }
    async refresh() {
        let response = await this.proxy.libros();
        if (response.ok) {
            let lista = document.getElementById('libros');
            let items = '';
            let libros = await response.json();
            libros.forEach(function (l) {
                if (l.id == this.libro?.id)
                    items = items + `<li onclick="presenter.seleccionarLibroClick(${l.id})"><strong>${l.titulo}&nbsp;<em>(${l.autores})</em></strong></li>`;
                else
                    items = items + `<li onclick="presenter.seleccionarLibroClick(${l.id})">${l.titulo}&nbsp;<em>(${l.autores})</em></li>`;
            }, this)
            lista.innerHTML = items;
            let statusBar = document.getElementById('status');
            statusBar.innerHTML = this.status;
        }
    }  
}
    