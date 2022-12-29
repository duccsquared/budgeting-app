/*
Manages routing, along with global variables for the application
*/

import {BtnMain, BtnSecondary, H1, H2, H3, P, Table, TR1, TR2, TH, TD, CheckBox, RadioBox, MainSection} from './components.js';
import NavBar from './navbar.js'
import HomePage from './pages/home.js'
import LoginPage from './pages/login.js';
import ChartDisplay from './pages/chartDisplay.js'
import GraphDisplay from './pages/graphDisplay.js'
import TableDisplay from './pages/tableDisplay.js'
import DataObject from './data/dataObject.js';
import User from './data/user.js';
import Transaction from './data/transaction.js'
import AddTransaction from './pages/addTransaction.js'
import CategoryAccount from './pages/categoryAccount.js';
import Category from './data/category.js'
import Account from './data/account.js';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useEffect } from 'react';

class App extends React.Component { // <div style={{height: 20}}></div>
    constructor(props) {
        super(props)

        this.state = {
                loggedIn: false,
                userList: [],
                user: null,
                transactionList: [],
                hasDownloadedData: false,
                categoryList: [],
                accountList: [],
                selectedTransaction: null,
                dataLoaded: false,
        }

        DataObject.update = () => this.update()
        DataObject.getUser = () => this.state.user
        User.getList = () => this.state.userList
        User.add = (account) => this.addUser(account)
        Transaction.getList = () => this.state.transactionList
        Transaction.add = (transaction) => this.addTransaction(transaction)
        Transaction.remove = (index) => this.removeEntry(index)
        Category.getList = () => this.state.categoryList
        Category.add = (category) => this.addCategory(category)
        Category.remove = (index) => this.removeCategory(index)
        Account.getList = () => this.state.accountList
        Account.add = (account) => this.addAccount(account)
        Account.remove = (index) => this.removeAccount(index)
        // setDBListener((snapshot) => {
        //     console.log(snapshot)
        // })
        User.fromDB()
    }
    update() {
        this.setState({})
    }
    setLoggedIn(loggedIn) {
        this.setState({loggedIn: loggedIn})
    }
    addUser(username,password) {
        let user = new User(username,password)
        this.state.userList.push(user)
        this.setState({
            userList: this.state.userList
        })
        return user 
    }
    setUser(user) {
        // DataObject.userRoot = user.username + "/"
        this.setState({user: user,hasDownloadedData: false})
    }
    addEntry(date="5/5/2020",label="default",amount=0,category="none",description="",account="") {
        this.addTransaction(new Transaction(date,label,amount,category,description,account))
    }
    addTransaction(transaction) {
        this.state.transactionList.push(transaction)
        this.setState({
            transactionList: this.state.transactionList
        })
        Transaction.toDB()
    }
    removeEntry(index) {
        this.state.transactionList.splice(index,1)
        this.setState({
            transactionList: this.state.transactionList
        })
        Transaction.toDB()
    }
    addCategory(category) {
        this.state.categoryList.push(new Category(category))
        this.setState({
            categoryList: this.state.categoryList
        })
        Category.toDB()
    }
    removeCategory(index) {
        let category = this.state.categoryList.splice(index,1)[0]
        category.name = "<DELETED>"
        this.setState({
            categoryList: this.state.categoryList
        })
        Category.toDB()
    }
    addAccount(account) {
        this.state.accountList.push(new Account(account))
        this.setState({
            accountList: this.state.accountList
        })
        Account.toDB()
    }
    removeAccount(index) {
        let account = this.state.accountList.splice(index,1)[0]
        account.name = "<DELETED>"
        this.setState({
            accountList: this.state.accountList
        })
        Account.toDB()
    }
    setSelectedTransaction(selectedTransaction) {
        this.setState({selectedTransaction: selectedTransaction})
    }
    componentDidMount() {

    }
    render() {
        if(this.state.loggedIn && !this.state.hasDownloadedData) {
            this.setState({hasDownloadedData: true})
            // Account.toDB()
            // Category.toDB()
            // Transaction.toDB()
            DataObject.userToDB()
            Account.fromDB()
            .then(()=>Category.fromDB())
            .then(()=>Transaction.fromDB())
            .then(()=>this.setState({dataLoaded: true}))
            // if(this.state.transactionList.length === 0) {
            //     Transaction.add(new Transaction("2022-11-22","Lunch",-5,Category.getList()[1],"Chicken rice at uni",Account.getList()[1]))
            //     Transaction.add(new Transaction("2022-11-23","Steam",-10,Category.getList()[5],"",Account.getList()[2]))
            //     Transaction.add(new Transaction("2022-11-23","Free Money",20,Category.getList()[0],"",Account.getList()[1]))
            //     Transaction.add(new Transaction("2022-11-24","Groceries",-40,Category.getList()[1],"A bunch of stuff for a few days",Account.getList()[1]))
            //     Transaction.add(new Transaction("2022-11-24","Laundry Card",-50,Category.getList()[4],"Refilled card",Account.getList()[2]))        
            // }
        }
        return (
            <Router>
                <NavBar 
                    setSelectedTransaction={(selectedTransaction) => this.setSelectedTransaction(selectedTransaction)}
                    loggedIn={this.state.loggedIn}
                ></NavBar>
                <Routes>
                    <Route path="/" element={<LoginPage 
                        setLoggedIn={(loggedIn) => this.setLoggedIn(loggedIn)}
                        userList={this.state.userList}
                        addUser={(username,password)=>this.addUser(username,password)}
                        setUser={(user)=>this.setUser(user)}
                    ></LoginPage>}></Route>
                    <Route path="/chartDisplay" element={<ChartDisplay></ChartDisplay>}></Route>
                    <Route path="/graphDisplay" element={<GraphDisplay
                        transactionList={this.state.transactionList} 
                        categoryList={this.state.categoryList}  
                        accountList={this.state.accountList}
                        update={()=>this.update()}>        
                    </GraphDisplay>}></Route>
                    <Route path="/tableDisplay" element={<TableDisplay 
                        transactionList={this.state.transactionList} 
                        removeEntry={(index) => this.removeEntry(index)} 
                        categoryList={this.state.categoryList}  
                        accountList={this.state.accountList}
                        setSelectedTransaction={(selectedTransaction) => this.setSelectedTransaction(selectedTransaction)}     
                        update={()=>this.update()}
                        dataLoaded={this.state.dataLoaded}> 
                    </TableDisplay>}></Route>
                    <Route path="/addTransaction" element={<AddTransaction 
                        transactionList={this.state.transactionList} 
                        addEntry={(date,label,amount,category,description,account) => this.addEntry(date,label,amount,category,description,account)}
                        categoryList={this.state.categoryList}  
                        accountList={this.state.accountList}
                        selectedTransaction={this.state.selectedTransaction}
                        >
                    </AddTransaction>}></Route>
                    <Route path="/categoryAccount" element={<CategoryAccount
                        categoryList={this.state.categoryList}  
                        accountList={this.state.accountList}
                        addCategory={(category) => this.addCategory(category)}
                        removeCategory={(index) => this.removeCategory(index)}
                        addAccount={(account) => this.addAccount(account)}
                        removeAccount={(index) => this.removeAccount(index)}
                        >
                    </CategoryAccount>}></Route>
                    <Route path="*" element={
                        <MainSection>
                            <div className="h-10"></div>
                            <H1>404</H1>
                            <H2>page not found</H2>
                        </MainSection>
                    }></Route>
                </Routes>
                <RerouteWrapper user={this.state.user}/>
            </Router>
        );
    }
}

function RerouteWrapper(props) {
    let navigate = useNavigate()
    let location = useLocation()
    useEffect(() => {
        if(props.user===null && location.pathname!=="/") {navigate("/")}
    })
    return <div></div>
}

export default App;
