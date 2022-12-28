import DataObject, { getFromDBPromise } from "./dataObject";

class User extends DataObject {
    static path = "user/"
    static getList = null 
    static add = null
    static remove = null 
    constructor(username,password) {
        super()
        this.username = username
        this.password = password
    }
    get username() {return this._username}
    get password() {return this._password}

    set username(username) {this._username = username; this.toDB()}
    set password(password) {this._password = password; this.toDB()}

    toDB(index=-1) {
        // TODO: figure out how to do this
    }
    
    fromData(data) {
        this._username = data["_username"]
        this._password = data["_password"]
    }
    static fromDB() {
        return getFromDBPromise("/").then((snapshot) => {
            let data = snapshot.val() // extract the actual data
            let userList = User.getList()
            userList.length = 0 // clear current instance list
            // loop for each index
            for(let index in data) {
                let subData = data[index] // get object data
                let object =  new User() // empty object
                object.fromData(subData["user"]) // put data into object
                userList.push(object)
            }
        })
    }
}

export default User;