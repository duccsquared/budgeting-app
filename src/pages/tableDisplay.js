/*
Page that displays the transaction data in the form of a table 
*/
import React from 'react';
import {MainSection, BtnMain, BtnSecondary, H1, H2, H3, P, Table, THead, TBody, TR1, TR2, TH, TD, CheckBox, RadioBox, SubSection, BtnMinim, InputDate} from '../components.js';
import TransactionTable from '../transactionTable.js';
import DataTypeSection, { AccountSection, CategorySection, DateRangeSection } from '../dataOptionComponents.js';
class TableDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dateType: "net",
            startDate: null,
            endDate: null
        }
    }
    getFilteredTransactionList() {
        let transactionList = this.props.transactionList
        transactionList = transactionList.filter((transaction) => transaction.category.checked && transaction.account.checked)
        if(this.state.dataType==="in") {
            transactionList = transactionList.filter((transaction) => transaction.amount>=0)
        }
        else if(this.state.dataType==="out") {
            transactionList = transactionList.filter((transaction) => transaction.amount<=0)
        }

        if(this.state.startDate!==null && this.state.endDate!==null) {
            let startDate = (new Date(this.state.startDate)).getTime()
            let endDate = (new Date(this.state.endDate)).getTime()
            if(startDate<=endDate) {
                transactionList = transactionList.filter((transaction) => {let d = (new Date(transaction.date)).getTime(); return d >= startDate && d <= endDate})
            }
        }
        return transactionList
    }
    exportAsCSV() {
        let csvData = []
        csvData.push("date,label,amount,category,description,account")
        let transactionList = this.getFilteredTransactionList()
        for(let index in transactionList) {
            let transaction = transactionList[index]
            let csvRow = []
            csvRow.push(`"${transaction.date}"`)
            csvRow.push(`"${transaction.label}"`)
            csvRow.push(`"${transaction.amount}"`)
            csvRow.push(`"${transaction.category.name}"`)
            csvRow.push(`"${transaction.description}"`)
            csvRow.push(`"${transaction.account.name}"`)
            csvData.push(csvRow.join(","));
        }
        csvData = csvData.join('\n');

        let csvFile = new Blob([csvData], {type: "text/csv"})
        let tempLink = document.createElement('a');
        tempLink.download = "export.csv"
        let url = window.URL.createObjectURL(csvFile);
        tempLink.href = url;
        tempLink.style.display = "none";
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink)
    }
    render() {
        let props = this.props
        let transactionList = this.getFilteredTransactionList()
        return (
            <MainSection>
                <H2>Table Data</H2>
                <div className="grid grid-cols-6 gap-4">
                    <SubSection className="col-span-6"></SubSection>
                    <SubSection className="col-span-4 row-span-2">
                        <TransactionTable 
                            transactionList={transactionList} 
                            removeEntry={(index) => props.removeEntry(index)}
                            setSelectedTransaction={(selectedTransaction) => props.setSelectedTransaction(selectedTransaction)}
                        />
                        <BtnMain onClick={()=>this.exportAsCSV()}>export as csv</BtnMain>
                    </SubSection>
                    <DataTypeSection onRadio={(dataType)=>this.setState({dataType:dataType})}/>
                    <AccountSection accountList={props.accountList} update={()=>props.update()} dataLoaded={this.props.dataLoaded}/>
                    <DateRangeSection 
                        setStartDate={(e) => this.setState({startDate: e.target.value})} 
                        setEndDate={(e) => this.setState({endDate: e.target.value})}
                    />
                    <CategorySection categoryList={props.categoryList} update={()=>props.update()} dataLoaded={this.props.dataLoaded}/>
                </div>
            </MainSection>
        )
    }
}



export default TableDisplay