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


class App extends React.Component { // <div style={{height: 20}}></div>
    constructor(props) {
        super(props)

        this.state = {
                loggedIn: true,
                userList: [],
                user: null,
                transactionList: [],
                categoryList: [
                    new Category("none"),
                    new Category("food"),
                    new Category("groceries"),
                    new Category("furniture"),
                    new Category("laundry"),
                    new Category("games")],
                accountList: [
                    new Account("none"),
                    new Account("cash"),
                    new Account("bank")],
                selectedTransaction: null
        }

        DataObject.update = () => this.update()
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
        
        Transaction.setDefaultValues()
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
        this.setState({user: user})
    }
    addEntry(date="5/5/2020",label="default",amount=0,category="none",description="",account="") {
        this.addTransaction(new Transaction(date,label,amount,category,description,account))
    }
    addTransaction(transaction) {
        this.state.transactionList.push(transaction)
        this.setState({
            transactionList: this.state.transactionList
        })
    }
    removeEntry(index) {
        this.state.transactionList.splice(index,1)
        this.setState({
            transactionList: this.state.transactionList
        })
    }
    addCategory(category) {
        this.state.categoryList.push(new Category(category))
        this.setState({
            categoryList: this.state.categoryList
        })
    }
    removeCategory(index) {
        let category = this.state.categoryList.splice(index,1)[0]
        category.name = "<DELETED>"
        this.setState({
            categoryList: this.state.categoryList
        })
    }
    addAccount(account) {
        this.state.accountList.push(new Account(account))
        this.setState({
            accountList: this.state.accountList
        })
    }
    removeAccount(index) {
        let account = this.state.accountList.splice(index,1)[0]
        account.name = "<DELETED>"
        this.setState({
            accountList: this.state.accountList
        })
    }
    setSelectedTransaction(selectedTransaction) {
        this.setState({selectedTransaction: selectedTransaction})
    }
    componentDidMount() {

    }
    render() {
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
                    <Route path="/graphDisplay" element={<GraphDisplay></GraphDisplay>}></Route>
                    <Route path="/tableDisplay" element={<TableDisplay 
                        transactionList={this.state.transactionList} 
                        removeEntry={(index) => this.removeEntry(index)} 
                        categoryList={this.state.categoryList}  
                        accountList={this.state.accountList}
                        setSelectedTransaction={(selectedTransaction) => this.setSelectedTransaction(selectedTransaction)}     
                        update={()=>this.update()}> 
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
            </Router>
        );
    }
}

export default App;
