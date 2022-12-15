import {MainSection, BtnMain, BtnSecondary, H1, H2, H3, P, Table, THead, TBody, TR1, TR2, TH, TD, CheckBox, RadioBox, SubSection} from './components.js';
import React from 'react';
import {Navigate, useNavigate} from "react-router-dom"

class TransactionTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sortType: null,
            ascending: true
        }
        let invertFunc = (x) => this.state.ascending ? x : (x*-1)
        this.compareFuncs = [
            (a,b)=> invertFunc(a.date.localeCompare(b.date)),
            (a,b)=> invertFunc(a.label.localeCompare(b.label)),
            (a,b)=> invertFunc(a.amount - b.amount),
            (a,b)=> invertFunc(a.category.name.localeCompare(b.category.name)),
            (a,b)=> invertFunc(a.description.localeCompare(b.description)),
            (a,b)=> invertFunc(a.account.name.localeCompare(b.account.name))]
    }
    
    setSort(col) {
        if(col===this.state.sortType) { // toggle between ascending and descending 
            this.setState({
                ascending: !this.state.ascending
            })
        }
        else { // sort ascending with the new column
            this.setState({
                sortType: col,
                ascending: true
            })
        }

    }
    render() {
        let transactionList = this.props.transactionList
        if(this.state.sortType!=null) {
            let func = this.compareFuncs[this.state.sortType]
            transactionList = transactionList.sort((a,b) => func(a,b))
        }
        transactionList = transactionList.filter((transaction) => transaction.category.checked && transaction.account.checked)
        let sortType = this.state.sortType
        let ascending = this.state.ascending
        return (
            <Table className="table-fixed">
                <THead>
                    <TR1>
                        <TransactionTH className="w-1/12" index={0} sortType={sortType} ascending={ascending} setSort={(col)=>this.setSort(col)}>Date</TransactionTH>
                        <TransactionTH className="w-2/12" index={1} sortType={sortType} ascending={ascending} setSort={(col)=>this.setSort(col)}>Label</TransactionTH>
                        <TransactionTH className="w-1/12" index={2} sortType={sortType} ascending={ascending} setSort={(col)=>this.setSort(col)}>Amount</TransactionTH>
                        <TransactionTH className="w-2/12" index={3} sortType={sortType} ascending={ascending} setSort={(col)=>this.setSort(col)}>Category</TransactionTH>
                        <TransactionTH className="w-3/12" index={4} sortType={sortType} ascending={ascending} setSort={(col)=>this.setSort(col)}>Description</TransactionTH>
                        <TransactionTH className="w-2/12" index={5} sortType={sortType} ascending={ascending} setSort={(col)=>this.setSort(col)}>Account</TransactionTH>
                        <TH className="w-1/12"></TH>
                    </TR1>
                </THead>
                <TBody>
                    {
                    transactionList.map(
                        (transaction,index) => (
                            <TransactionRow 
                                transaction={transaction} 
                                index={index} 
                                removeEntry={(index) => this.props.removeEntry(index)}
                                setSelectedTransaction={(selectedTransaction) => this.props.setSelectedTransaction(selectedTransaction)}
                            />
                        )
                    )
                    }
                </TBody>
            </Table> 
        )
    }
}
class TransactionTH extends React.Component {
    render() {
        let text = this.props.children 
        if(this.props.sortType===this.props.index) {
            if(this.props.ascending) {
                text += " ▲"
            }
            else {
                text += " ▼"
            }
        }
        return (
            <TH className={this.props.className} onClick={()=>this.props.setSort(this.props.index)}>
                {text}
            </TH>
        )
    }
}
function TransactionRow(props) {
    let navigate = useNavigate();
    return (
        <TR index={props.index}>
            <TD>{props.transaction.date}</TD>
            <TD>{props.transaction.label}</TD>
            <TD>{props.transaction.amount}</TD>
            <TD>{props.transaction.category.name}</TD>
            <TD>{props.transaction.description}</TD>
            <TD>{props.transaction.account.name}</TD>
            <TD>
                <BtnSecondary onClick={() => {props.setSelectedTransaction(props.index); navigate("/addTransaction")}}>
                    E
                </BtnSecondary> 
                <BtnMain onClick={() => props.removeEntry(props.index)}>X</BtnMain>
                
            </TD>
        </TR>
        )
}

function TR(props) {
    if(props.index%2===0) {
        return <TR1>{props.children}</TR1>
    }
    else {
        return <TR2>{props.children}</TR2>
    }
}

export default TransactionTable;