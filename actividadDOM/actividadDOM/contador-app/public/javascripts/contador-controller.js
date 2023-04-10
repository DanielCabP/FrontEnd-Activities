class contadorController extends Controller{
    constructor(model, view){
        super(model,view)
    }

    onIncrementarClick(event){
        this.model.incrementar();
        this.view.refresh();
    }
}