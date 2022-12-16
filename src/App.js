/*
Manages routing, along with global variables for the application
*/

import {BtnMain, BtnSecondary, H1, H2, H3, P, Table, TR1, TR2, TH, TD, CheckBox, RadioBox} from './components.js';
import NavBar from './navbar.js'
import HomePage from './pages/home.js'
import ChartDisplay from './pages/chartDisplay.js'
import GraphDisplay from './pages/graphDisplay.js'
import TableDisplay from './pages/tableDisplay.js'
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
        this.addEntry("2022-11-22","Lunch",-5,this.state.categoryList[1],"Chicken rice at uni",this.state.accountList[1])
        this.addEntry("2022-11-23","Steam",-10,this.state.categoryList[5],"",this.state.accountList[2])
        this.addEntry("2022-11-23","Free Money",20,this.state.categoryList[0],"",this.state.accountList[1])
        this.addEntry("2022-11-24","Groceries",-40,this.state.categoryList[1],"A bunch of stuff for a few days",this.state.accountList[1])
        this.addEntry("2022-11-24","Laundry Card",-50,this.state.categoryList[4],"Refilled card",this.state.accountList[2])
    }
    update() {
        console.log("oop")
        this.setState({})
    }
    addEntry(date="5/5/2020",label="default",amount=0,category="none",description="",account="") {
        this.state.transactionList.push(new Transaction(date,label,amount,category,description,account))
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
                <NavBar setSelectedTransaction={(selectedTransaction) => this.setSelectedTransaction(selectedTransaction)}></NavBar>
                <Routes>
                    <Route path="/" element={<HomePage></HomePage>}></Route>
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
                </Routes>
            </Router>
        );
    }
}

export default App;
