class LocalStorageModel extends Model{

    constructor(storageId){
       super(storageId);
    }

    get storageId(){
        return this._storageId;
    }

    serialize(){
        localStorage.setItem(this.storageId, JSON.stringify(this));
    }

    deserialize(){
        Object.assign(this, JSON.parse(localStorage.getItem(this.storageId)));
    }

}