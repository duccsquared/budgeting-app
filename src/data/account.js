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
        this.id = DataObject.genRandomID()
        this.name = name
        this.checked = true
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
    toDB(index) {
        super.toDB(index,Account.getList(),Account.key)
    }
    static toDB() {
        DataObject.toDB(Account.getList(),Account.key)
    }
    fromData(data) {
        this.id = data["id"]
        this.name = data["name"]
        this.checked = data["checked"]
    }
    static fromDB() {
        return super.fromDB(Account.getList(),Account.key,() => new Account())
    }
}

export default Account;