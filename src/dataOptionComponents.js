import React from 'react';
import {MainSection, BtnMain, BtnSecondary, H1, H2, H3, P, Table, THead, TBody, TR1, TR2, TH, TD, CheckBox, RadioBox, SubSection, BtnMinim, InputDate} from './components.js';

export default class DataTypeSection extends React.Component {
    render() {
        return (
            <SubSection>
                <P>data type</P>
                <RadioBox name="dataType" value="net" onChange={()=>this.props.onRadio("net")}>net cashflow</RadioBox>
                <RadioBox name="dataType" value="in" onChange={()=>this.props.onRadio("in")}>inflow</RadioBox>
                <RadioBox name="dataType" value="out" onChange={()=>this.props.onRadio("out")}>outflow</RadioBox>
            </SubSection>
        )
    }
}

export class DateRangeSection extends React.Component {
    render() {
        return (
            <SubSection>
                <P>date range</P>
                <div className="inline-flex">
                    <P>start:</P>
                    <div className="w-2"/>
                    <InputDate onChange={(e) => this.props.setStartDate(e)}/>
                </div>
                <div className="inline-flex">
                    <P>end:</P>
                    <div className="w-2"/>
                    <InputDate onChange={(e) => this.props.setEndDate(e)}/>
                </div>
            </SubSection>
        )
    }
}

export class CategorySection extends React.Component {
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
        if(this.state.isInitial && this.state.dataLoaded) {
            this.setState({isInitial: false})
        }
        return html
    }
}

export class AccountSection extends React.Component {
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
        if(this.state.isInitial && this.state.dataLoaded) {
            this.setState({isInitial: false})
        }
        return html
    }
}
