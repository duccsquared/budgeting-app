/*
Class that represents a single transaction
*/
import DataObject from "./dataObject";
import Category from "./category";
import Account from "./account";

class Transaction extends DataObject {
    static key = "transactions"
    static getList = null 
    static add = null
    static remove = null 
    constructor(date="5/5/2020",label="default",amount=0,category="none",description="",account="") {
        super()
        this._date = date 
        this._label = label 
        this._amount = amount 
        this._category = category
        this._description = description 
        this._account = account 
    }
    // static setDefaultValues() {
    //     this.add(new Transaction("2022-11-22","Lunch",-5,Category.getList()[1],"Chicken rice at uni",Account.getList()[1]))
    //     this.add(new Transaction("2022-11-23","Steam",-10,Category.getList()[5],"",Account.getList()[2]))
    //     this.add(new Transaction("2022-11-23","Free Money",20,Category.getList()[0],"",Account.getList()[1]))
    //     this.add(new Transaction("2022-11-24","Groceries",-40,Category.getList()[1],"A bunch of stuff for a few days",Account.getList()[1]))
    //     this.add(new Transaction("2022-11-24","Laundry Card",-50,Category.getList()[4],"Refilled card",Account.getList()[2]))
    // }
    get date() {return this._date}
    get label() {return this._label}
    get amount() {return this._amount}
    get category() {return this._category}
    get description() {return this._description}
    get account() {return this._account}

    set date(date) {this._date = date; this.toDB()}
    set label(label) {this._label = label; this.toDB()}
    set amount(amount) {this._amount = amount; this.toDB()}
    set category(category) {this._category = category; this.toDB()}
    set description(description) {this._description = description; this.toDB()}
    set account(account) {this._account = account; this.toDB()}

    toDB(index=-1) {
        super.toDB(index,Transaction.getList(),Transaction.key)
    }
    static toDB() {
        DataObject.toDB(Transaction.getList(),Transaction.key)
    }
    fromData(data) {
        this._date = data["_date"]
        this._label = data["_label"] 
        this._amount = data["_amount"] 
        this._category = Category.findCategoryByID(data["_category"]["_id"])
        this._description = data["_description"] 
        this._account = Account.findAccountByID(data["_account"]["_id"])
    }

    static fromDB() {
        return super.fromDB(Transaction.getList(),Transaction.key,() => new Transaction())
    }
}

export default Transaction;
