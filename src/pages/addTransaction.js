/*
Page that allows for transactions to be added
*/
import React from 'react';
import {MainSection, BtnMain, BtnSecondary, BtnMinim, H1, H2, H3, P, Table, THead, TBody, TR1, TR2, TH, TD, CheckBox, RadioBox, SubSection, Input, TextArea, InputDate, Select, Option} from '../components.js';
import { Link, useNavigate } from 'react-router-dom';
import Transaction from '../data/transaction.js';

class AddTransaction extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isInitial: true,
            label: "",
            date: "",
            amount: 0,
            category: this.props.categoryList[0],
            account: this.props.accountList[0],
            description: "",
            isTransfer: false,
            accountTransfer: this.props.accountList[0]
        }
    }
    onConfirm() {
        let index = this.props.selectedTransaction
        if(index==null) {this.onAdd(); return}
        let transaction = this.props.transactionList[index]
        transaction.label = this.state.label
        transaction.date = this.state.date
        transaction.amount = this.state.amount
        transaction.category = this.state.category
        transaction.account = this.state.account
        transaction.description = this.state.description
        this.render()
    }
    onAdd() {
        if(this.state.isTransfer) {
            this.props.addEntry(this.state.date,this.state.label,-this.state.amount,this.state.category,this.state.description,this.state.accountTransfer)
        }
        this.props.addEntry(this.state.date,this.state.label,this.state.amount,this.state.category,this.state.description,this.state.account)
    }

    render() {
        let index = this.props.selectedTransaction
        let transaction = index!=null ? this.props.transactionList[index] : null 
        let html = (
            <MainSection>
                <H2>Transaction Entry</H2>
                <div className="grid grid-cols-6 gap-4">
                    <SubSection className="col-span-3">
                        <div className="h-4"/>
                        <div className="inline-flex">
                            <P>label:</P>
                            <div className="w-2"/>
                            <Input onChange={(e) => this.setState({label: e.target.value})} {...this.state.isInitial?{value: transaction!==null?transaction.label:""}:{}}/>
                        </div>
                        <div className="h-4"/>
                        <div className="inline-flex">
                            <P>date:</P>
                            <div className="w-2"/>
                            <InputDate onChange={(e) => this.setState({date: e.target.value})} {...this.state.isInitial?{value: transaction!==null?transaction.date:""}:{}}/>
                        </div>
                        <div className="h-4"/>
                        <div className="inline-flex">
                            <P>amount:</P>
                            <div className="w-2"/>
                            <Input onChange={(e) => this.setState({amount: e.target.value})} {...this.state.isInitial?{value: transaction!==null?transaction.amount:""}:{}}/>
                        </div>
                        <div className="h-4"/>
                    </SubSection>
                    <SubSection className="col-span-3">
                        <div className="h-4"/>
                        <div className="inline-flex">
                            <P>category:</P>
                            <div className="w-2"/>
                            <Select onChange={(e)=> this.setState({category: this.props.categoryList[e.nativeEvent.target.selectedIndex]})} {...this.state.isInitial?{value: transaction!==null?transaction.category.name:""}:{}}>
                                {this.props.categoryList.map((category) => <Option>{category.name}</Option>)}
                            </Select>
                        </div>
                        <div className="h-4"/>
                        <div className="inline-flex">
                            <P>account:</P>
                            <div className="w-2"/>
                            <Select onChange={(e)=> this.setState({account: this.props.accountList[e.nativeEvent.target.selectedIndex]})} {...this.state.isInitial?{value: transaction!==null?transaction.account.name:""}:{}}>
                                {this.props.accountList.map((account) => <Option>{account.name}</Option>)}
                            </Select>
                        </div>
                        <div className="h-4"/>
                    </SubSection>
                    <SubSection className="col-span-6">
                        <CheckBox onChange={(e)=>{this.setState({isTransfer: !this.state.isTransfer})}}>is transfer</CheckBox>
                        <div className="inline-flex">
                            <P>transfer from:</P>
                            <div className="w-2"/>
                            <Select onChange={(e)=> this.setState({accountTransfer: this.props.accountList[e.nativeEvent.target.selectedIndex]})}>
                                {this.props.accountList.map((account) => <Option>{account.name}</Option>)}
                            </Select>
                        </div>
                    </SubSection>
                    <SubSection className="col-span-6">
                        <div className="h-4"/>
                        <P className="text-left">description:</P>
                        <div className="h-4"/>
                        <TextArea onChange={(e) => this.setState({description: e.target.value})} {...this.state.isInitial?{value: transaction!==null?transaction.description:""}:{}}/>
                        <div className="h-4"/>
                    </SubSection>
                    <div className="col-span-2"></div>
                    <ButtonSection transaction={transaction} onConfirm={() => this.onConfirm()} onAdd={() => this.onAdd()}></ButtonSection>
                </div>
            </MainSection>
        )
        if(this.state.isInitial) {
            this.setState({
                isInitial: false,
                label: transaction!==null?transaction.label:"",
                date: transaction!==null?transaction.date:"",
                amount: transaction!==null?transaction.amount:0,
                category: transaction!==null?transaction.category:this.props.categoryList[0],
                account: transaction!==null?transaction.account:this.props.accountList[0],
                description: transaction!==null?transaction.description:"",
            })
        }
        return html 
    }
}

function ButtonSection(props) {
    let navigate = useNavigate()
    return (
        <SubSection className="col-span-2">
        <div className="h-2"/>
        {
        props.transaction!=null?
            <div>
                <BtnMain onClick={() => {props.onConfirm();navigate("/tableDisplay")}}>Confirm</BtnMain>
                <BtnSecondary><Link to="/tableDisplay">Cancel</Link></BtnSecondary>
            </div>
        : 
        <BtnMain onClick={() => {props.onAdd();navigate("/tableDisplay")}}>Add</BtnMain>
        }
        <div className="h-2"/>
    </SubSection>
    )
}


export default AddTransaction;