import React from 'react';
import {MainSection, BtnMain, BtnSecondary, BtnMinim, H1, H2, H3, P, Table, THead, TBody, TR1, TR2, TH, TD, CheckBox, RadioBox, SubSection, Input, TextArea} from '../components.js';

class AddTransaction extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            label: "",
            date: "",
            amount: 0,
            category: "",
            account: "",
            description: ""
        }
    }

    onConfirm() {
        this.props.addEntry(this.state.label,this.state.date,this.state.amount,this.state.category,this.state.description)
    }

    render() {
        
        return (
            <MainSection>
                <H2>Transaction Entry</H2>
                <div className="grid grid-cols-6 gap-4">
                    <SubSection className="col-span-3">
                        <div className="h-4"/>
                        <div className="inline-flex">
                            <P>label:</P>
                            <div className="w-2"/>
                            <Input onChange={(e) => this.setState({label: e.target.value})}/>
                        </div>
                        <div className="h-4"/>
                        <div className="inline-flex">
                            <P>date:</P>
                            <div className="w-2"/>
                            <Input onChange={(e) => this.setState({date: e.target.value})}/>
                        </div>
                        <div className="h-4"/>
                        <div className="inline-flex">
                            <P>amount:</P>
                            <div className="w-2"/>
                            <Input onChange={(e) => this.setState({amount: e.target.value})}/>
                        </div>
                        <div className="h-4"/>
                    </SubSection>
                    <SubSection className="col-span-3">
                        <div className="h-4"/>
                        <div className="inline-flex">
                            <P>category:</P>
                            <div className="w-2"/>
                            <Input onChange={(e) => this.setState({category: e.target.value})}/>
                        </div>
                        <div className="h-4"/>
                        <div className="inline-flex">
                            <P>account:</P>
                            <div className="w-2"/>
                            <Input onChange={(e) => this.setState({account: e.target.value})}/>
                        </div>
                        <div className="h-4"/>
                    </SubSection>
                    <SubSection className="col-span-6">
                        <div className="h-4"/>
                        <P className="text-left">description:</P>
                        <div className="h-4"/>
                        <TextArea onChange={(e) => this.setState({description: e.target.value})}/>
                        <div className="h-4"/>
                    </SubSection>
                    <div className="col-span-2"></div>
                    <SubSection className="col-span-2">
                        <div className="h-2"/>
                        <BtnMain onClick={() => this.onConfirm()}>Confirm</BtnMain>
                        <BtnSecondary>Cancel</BtnSecondary>
                        <div className="h-2"/>
                    </SubSection>
                </div>
            </MainSection>
        )
    }
}

export default AddTransaction;