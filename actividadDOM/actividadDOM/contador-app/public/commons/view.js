class View {
    constructor(model, parentId){
        this._model = model;
        this._parentId = parentId;
    }

    get model() {return this._model;}
    get parentId() {return this._parentId;}
    get content() {return this._content;}
    set content(content){
        this._content = content;
   }
    refresh(){
        console.log(' Refreshing')
        document.getElementById(this.parentId).innerHTML = this.content;
    }
}