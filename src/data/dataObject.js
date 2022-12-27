import * as importedApp from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js"
import * as importedDatabase from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js"

const firebaseConfig = {
    apiKey: "AIzaSyCaxhxldgNBkXbghtP33EqHQ0zDDzd9YQI",
    authDomain: "budgetingapp-50731.firebaseapp.com",
    databaseURL: "https://budgetingapp-50731-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "budgetingapp-50731",
    storageBucket: "budgetingapp-50731.appspot.com",
    messagingSenderId: "1018881999775",
    appId: "1:1018881999775:web:ac24929f9901f95b54f3aa"  
};
    

let fireApp = importedApp
let fireDB = importedDatabase
let app = fireApp.initializeApp(firebaseConfig);
let database = fireDB.getDatabase();

function rInt(a,b) {return Math.floor(Math.random() * (b+1-a)) + a}
function rChoice(list) {return list[Math.floor(Math.random() * list.length)];}


function genRandomID(length=16) {
    let result = rChoice(["Red","Orange","Yellow","Green","Blue","Purple","White","Grey","Black","Scarlet","Cyan","Magenta","Pink","Indigo","Violet"])
    result += `-${rInt(10,99)}-`
    for(let i = 0; i < length; i++) {
        result += String.fromCharCode(rChoice([rInt(48,57),rInt(65,90),rInt(97,122)]))
    }
    return result 
}

export function setToDB(path,data) {
    fireDB.set(fireDB.ref(database,path), data);
}

export function getFromDB(path,funcOnLoad) {
    fireDB.get(fireDB.child(fireDB.ref(database), path)).then((snapshot) => funcOnLoad(snapshot));
}

export function getFromDBPromise(path) {
    return fireDB.get(fireDB.child(fireDB.ref(database), path));
}

export function updateDB(path,data) {
    fireDB.update(fireDB.ref(database), {[path]: {data}})
}

export function setDBListener(funcOnUpdate) {
    fireDB.onValue(fireDB.child(fireDB.ref(database),"/"), (snapshot) => {funcOnUpdate(snapshot)});
}

export default class DataObject {
    static getUser = null 
    static update = null 

    static genRandomID() {return genRandomID()}

    static currentUsername() {
        return DataObject.getUser().username
    }

    static userToDB() {
        setToDB(`${DataObject.currentUsername()}/user/`,DataObject.getUser())
    }

    toDB(index,instanceList,folderKey) {
        if(index===-1) {index = instanceList.indexOf(this)}
        setToDB(`${DataObject.currentUsername()}/${folderKey}/${index}/`,this)
    }
    
    static toDB(instanceList,folderKey) {
        // clear everything first
        setToDB(`${DataObject.currentUsername()}/${folderKey}/`,"")
        // loop through taskList
        for(let index in instanceList) {
            instanceList[index].toDB(index)
        }
    }

    static fromDB(instanceList,folderKey,emptyInstanceFunc) { // TODO: either add list appending here or do it within the classes
        return getFromDBPromise(`${DataObject.currentUsername()}/${folderKey}/`).then((snapshot) => {
            let data = snapshot.val() // extract the actual data
            instanceList.length = 0 // clear current instance list
            // loop for each index
            for(let index in data) {
                let subData = data[index] // get object data
                let object =  emptyInstanceFunc() // empty object
                object.fromData(subData) // put data into object
                instanceList.push(object)
            }
        })
    }
}
