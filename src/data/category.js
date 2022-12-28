/*
Class that represents a single category
*/
import DataObject from "./dataObject";

class Category extends DataObject { 
    static default = new Category("none") // TODO: find default from list and only create if not available
    static key = "categories"
    static getList = null 
    static add = null
    static remove = null 
    constructor(name) {
        super()
        this._id = DataObject.genRandomID()
        this._name = name
        this._checked = true
    }
    static findCategoryByID(id) {
        let categoryList = Category.getList()
        for (let index in categoryList) {
            let category = categoryList[index]
            if(category.id===id) {
                return category 
            }
        }
        return Category.default 
    }

    get id() {return this._id}
    get name() {return this._name}
    get checked() {return this._checked}

    set id(id) {this._id = id; this.toDB()}
    set name(name) {this._name = name; this.toDB()}
    set checked(checked) {this._checked = checked; this.toDB()}

    toDB(index=-1) {
        super.toDB(index,Category.getList(),Category.key)
    }
    static toDB() {
        DataObject.toDB(Category.getList(),Category.key)
    }
    fromData(data) {
        this._id = data["_id"]
        this._name = data["_name"]
        this._checked = data["_checked"]
    }
    static fromDB() {
        return super.fromDB(Category.getList(),Category.key,() => new Category())
    }
}

export default Category;