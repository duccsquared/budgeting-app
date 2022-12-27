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
        this.date = date 
        this.label = label 
        this.amount = amount 
        this.category = category
        this.description = description 
        this.account = account 
    }
    // static setDefaultValues() {
    //     this.add(new Transaction("2022-11-22","Lunch",-5,Category.getList()[1],"Chicken rice at uni",Account.getList()[1]))
    //     this.add(new Transaction("2022-11-23","Steam",-10,Category.getList()[5],"",Account.getList()[2]))
    //     this.add(new Transaction("2022-11-23","Free Money",20,Category.getList()[0],"",Account.getList()[1]))
    //     this.add(new Transaction("2022-11-24","Groceries",-40,Category.getList()[1],"A bunch of stuff for a few days",Account.getList()[1]))
    //     this.add(new Transaction("2022-11-24","Laundry Card",-50,Category.getList()[4],"Refilled card",Account.getList()[2]))
    // }
    toDB(index) {
        super.toDB(index,Transaction.getList(),Transaction.key)
    }
    static toDB() {
        DataObject.toDB(Transaction.getList(),Transaction.key)
    }
    fromData(data) {
        this.date = data["date"]
        this.label = data["label"] 
        this.amount = data["amount"] 
        this.category = Category.findCategoryByID(data["category"]["id"])
        this.description = data["description"] 
        this.account = Account.findAccountByID(data["account"]["id"])
    }
    // TODO: create setters and getters for transaction (also the other data classes)
    static fromDB() {
        return super.fromDB(Transaction.getList(),Transaction.key,() => new Transaction())
    }
}

export default Transaction;
