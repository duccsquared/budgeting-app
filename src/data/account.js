/*
Class that represents a single account
*/
import DataObject from "./dataObject";

class Account extends DataObject { 
    static getList = null 
    static add = null
    static remove = null 
    constructor(name) {
        super()
        this.name = name
        this.checked = true
    }
}

export default Account;