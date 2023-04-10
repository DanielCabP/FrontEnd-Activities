class ContadorView extends View{
    constructor(model, parentId){
        super(model,parentId)
    }
    refresh(){
        this._content = this.model.valor;
        super.refresh();
    }
}