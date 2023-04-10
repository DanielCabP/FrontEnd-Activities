class Contador extends LocalStorageModel{
    constructor(valor = 0){
        super('contador-clase');
        this._valor = valor;
    }

    get valor(){
        this.deserialize();
        return this._valor;
    }

    set valor(valor){
        this._valor = valor;
        this.serialize();
    }

    incrementar(){
        this.valor++;
    }
}
