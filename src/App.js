import {BtnMain, BtnSecondary, H1, H2, H3, P, Table, TR1, TR2, TH, TD, CheckBox, RadioBox} from './components.js';
import NavBar from './navbar.js'
import HomePage from './pages/home.js'
import ChartDisplay from './pages/chartDisplay.js'
import GraphDisplay from './pages/graphDisplay.js'
import TableDisplay from './pages/tableDisplay.js'
import Transaction from './data/transaction.js'
import AddTransaction from './pages/addTransaction.js'

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import React from 'react';
// function logBeep() {
//   console.log(logBeep)
// }

class App extends React.Component { // <div style={{height: 20}}></div>
    constructor(props) {
        super(props)
        this.state = {
                transactionList: []
        }
        this.addEntry("22/11/2022","Lunch",5,"Food","Chicken rice at uni")
        this.addEntry("23/11/2022","Steam",10,"Games")
        this.addEntry("23/11/2022","Groceries",40,"Food","A bunch of stuff for a few days")
        this.addEntry("24/11/2022","Laundry Card",50,"Laundry","Refilled card")
    }
    addEntry(date="5/5/2020",label="default",amount=0,category="none",description="") {
        this.state.transactionList.push(new Transaction(date,label,amount,category,description))
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
    componentDidMount() {

    }
    render() {

        return (
            <Router>
                <NavBar></NavBar>
                <Routes>
                    <Route path="/" element={<HomePage></HomePage>}></Route>
                    <Route path="/chartDisplay" element={<ChartDisplay></ChartDisplay>}></Route>
                    <Route path="/graphDisplay" element={<GraphDisplay></GraphDisplay>}></Route>
                    <Route path="/tableDisplay" element={<TableDisplay transactionList={this.state.transactionList} removeEntry={(index) => this.removeEntry(index)}></TableDisplay>}></Route>
                    <Route path="/addTransaction" element={<AddTransaction transactionList={this.state.transactionList} addEntry={(date,label,amount,category,description) => this.addEntry(date,label,amount,category,description)}></AddTransaction>}></Route>
                </Routes>
            </Router>
        );
    }
}

export default App;
