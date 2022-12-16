/*
Page that displays the transaction data in the form of a table 
*/
import React from 'react';
import {MainSection, BtnMain, BtnSecondary, H1, H2, H3, P, Table, THead, TBody, TR1, TR2, TH, TD, CheckBox, RadioBox, SubSection, BtnMinim} from '../components.js';
import TransactionTable from '../transactionTable.js';

function TableDisplay(props) {
    return (
        <MainSection>
            <H2>Table Data</H2>
            <div className="grid grid-cols-6 gap-4">
                <SubSection className="col-span-6"></SubSection>
                <SubSection className="col-span-4 row-span-2">
                    <TransactionTable 
                        transactionList={props.transactionList} 
                        removeEntry={(index) => props.removeEntry(index)}
                        setSelectedTransaction={(selectedTransaction) => props.setSelectedTransaction(selectedTransaction)}
                    />
                </SubSection>
                <SubSection>
                    <P>data type</P>
                    <RadioBox name="dataType" value="net">net cashflow</RadioBox>
                    <RadioBox name="dataType" value="in">inflow</RadioBox>
                    <RadioBox name="dataType" value="out">outflow</RadioBox>
                </SubSection>
                <AccountSection accountList={props.accountList} update={()=>props.update()}/>
                <SubSection>
                    <P>clustering</P>
                    <RadioBox name="clustering" value="sep">separate entities</RadioBox>
                    <RadioBox name="clustering" value="day">cluster by day</RadioBox>
                    <RadioBox name="clustering" value="month">cluster by month</RadioBox>
                </SubSection>
                <CategorySection categoryList={props.categoryList} update={()=>props.update()}/>
            </div>
        </MainSection>
    )
}

class CategorySection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isInitial: true
        }
    }
    render() {
        let categoryList = this.props.categoryList
        let html = (
            <SubSection>
                <P>categories</P>
                {categoryList.map((category) => <CheckBox value="" onChange={(e)=>{category.checked=!category.checked;this.props.update()}} {...this.state.isInitial?{checked: category.checked}:{}}>{category.name}</CheckBox>)}
            </SubSection>
        )
        if(this.state.isInitial) {
            this.setState({isInitial: false})
        }
        return html
    }
}

class AccountSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isInitial: true
        }
    }
    render() {
        let accountList = this.props.accountList
        let html =  (
            <SubSection>
                <P>accounts</P>
                {accountList.map((account) => <CheckBox value=""  onChange={(e)=>{account.checked=!account.checked;this.props.update()}} {...this.state.isInitial?{checked: account.checked}:{}}>{account.name}</CheckBox>)}
            </SubSection>
        )
        if(this.state.isInitial) {
            this.setState({isInitial: false})
        }
        return html
    }
}

export default TableDisplay