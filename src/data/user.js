import DataObject from "./dataObject";

class User extends DataObject {
    static getList = null 
    static add = null
    static remove = null 
    constructor(username,password) {
        super()
        this.username = username
        this.password = password
    }
}

export default User;