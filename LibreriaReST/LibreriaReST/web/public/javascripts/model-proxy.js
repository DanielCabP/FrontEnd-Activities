class LibreriaProxy {
    async agregarLibro(titulo, autores) {
        let l = { titulo, autores };
        return await fetch(`/api/libros`, { method: 'POST', body: JSON.stringify(l), headers: { "Content-Type":"application/json" } });
    }
    async borrarLibro(id) {
        return await fetch(`/api/libros/id/${id}`, { method: 'DELETE' });
    }
    async modificarLibro(id, titulo, autores) {
        let l = { titulo, autores };
        return await fetch(`/api/libros/id/${id}`, { method: 'PUT', body: JSON.stringify(l), headers: { "Content-Type":"application/json" } });
    }
    async verLibro(id) {
        return await fetch(`/api/libros/id/${id}`);
    }
    async libros() {
        return await fetch('/api/libros');
    }
}
    