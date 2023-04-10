let model, view, controller;

function init(){
    model = new Contador();
    view = new ContadorView(model,'contador');
    controller = new contadorController(model, view);
    view.refresh();
}