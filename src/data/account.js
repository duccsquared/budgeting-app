/*
Class that represents a single account
*/
import DataObject from "./dataObject";

class Account extends DataObject { 
    static default = new Account("none") // TODO: find default from list and only create if not available
    static key = "accounts"
    static getList = null 
    static add = null
    static remove = null 
    constructor(name) {
        super()
        this._id = DataObject.genRandomID()
        this._name = name
        this._checked = true
    }
    static findAccountByID(id) {
        let accountList = Account.getList()
        for (let index in accountList) {
            let account = accountList[index]
            if(account.id===id) {
                return account 
            }
        }
        return Account.default 
    }

    get id() {return this._id}
    get name() {return this._name}
    get checked() {return this._checked}

    set id(id) {this._id = id; this.toDB()}
    set name(name) {this._name = name; this.toDB()}
    set checked(checked) {this._checked = checked; this.toDB()}

    toDB(index=-1) {
        super.toDB(index,Account.getList(),Account.key)
    }
    static toDB() {
        DataObject.toDB(Account.getList(),Account.key)
    }
    fromData(data) {
        this._id = data["_id"]
        this._name = data["_name"]
        this._checked = data["_checked"]
    }
    static fromDB() {
        return super.fromDB(Account.getList(),Account.key,() => new Account())
    }
}

export default Account;