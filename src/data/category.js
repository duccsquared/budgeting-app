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
        this.id = DataObject.genRandomID()
        this.name = name
        this.checked = true
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
    toDB(index) {
        super.toDB(index,Category.getList(),Category.key)
    }
    static toDB() {
        DataObject.toDB(Category.getList(),Category.key)
    }
    fromData(data) {
        this.id = data["id"]
        this.name = data["name"]
        this.checked = data["checked"]
    }
    static fromDB() {
        return super.fromDB(Category.getList(),Category.key,() => new Category())
    }
}

export default Category;