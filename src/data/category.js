/*
Class that represents a single category
*/
import DataObject from "./dataObject";

class Category extends DataObject { 
    static getList = null 
    static add = null
    static remove = null 
    constructor(name) {
        super()
        this.name = name
        this.checked = true
    }
}

export default Category;