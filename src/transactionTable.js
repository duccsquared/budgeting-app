import {MainSection, BtnMain, BtnSecondary, H1, H2, H3, P, Table, THead, TBody, TR1, TR2, TH, TD, CheckBox, RadioBox, SubSection} from './components.js';
import React from 'react';

class TransactionTable extends React.Component {
    getRowHTML(transaction,index) {
        let rowData = (
            <div>

            </div>
        )
        if(index%2===0) {
            return (
                 <TR1>
                    <TD>{transaction.date}</TD>
                    <TD>{transaction.label}</TD>
                    <TD>{transaction.amount}</TD>
                    <TD>{transaction.category}</TD>
                    <TD>{transaction.description}</TD>
                </TR1>
                )
        }
        return (
            <TR2>
               <TD>{transaction.date}</TD>
               <TD>{transaction.label}</TD>
               <TD>{transaction.amount}</TD>
               <TD>{transaction.category}</TD>
               <TD>{transaction.description}</TD>
           </TR2>
           )
    }

    render() {
        let transactionList = this.props.transactionList

        return (
            <Table className="table-fixed">
                <THead>
                    <TR1>
                        <TH className="w-1/12">Date</TH>
                        <TH className="w-2/12">Label</TH>
                        <TH className="w-1/12">Amount</TH>
                        <TH className="w-2/12">Category</TH>
                        <TH className="w-5/12">Description</TH>
                        <TH className="w-1/12"></TH>
                    </TR1>
                </THead>
                <TBody>
                    {
                    transactionList.map((transaction,index) => <TransactionRow transaction={transaction} index={index} />)
                    }
                </TBody>
            </Table> 
        )
    }
}

class TransactionRow extends React.Component {
    render() {
        return (
            <TR index={this.props.index}>
               <TD>{this.props.transaction.date}</TD>
               <TD>{this.props.transaction.label}</TD>
               <TD>{this.props.transaction.amount}</TD>
               <TD>{this.props.transaction.category}</TD>
               <TD>{this.props.transaction.description}</TD>
               <TD><BtnMain>X</BtnMain></TD>
           </TR>
           )
    }
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