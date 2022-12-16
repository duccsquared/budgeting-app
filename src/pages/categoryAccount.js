/*
Page that allows for adding, editing, and deleting categories and accounts
*/
import React from 'react';
import {MainSection, BtnMain, BtnSecondary, H1, H2, H3, P, Table, THead, TBody, TR1, TR2, TH, TD, CheckBox, RadioBox, SubSection, BtnMinim, Input} from '../components.js';

class CategoryAccount extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toggled: true,
            editingCategoryIndex: null,
            editingAccountIndex: null
        }
    }
    toggleEditCategory(index) {
        if(this.state.editingCategoryIndex===index) {
            this.setState({editingCategoryIndex: null, toggled: true})
        }
        else {
            this.setState({editingCategoryIndex: index, toggled: true})
        }
    }
    toggleEditAccount(index) {
        if(this.state.editingAccountIndex===index) {
            this.setState({editingAccountIndex: null, toggled: true})
        }
        else {
            this.setState({editingAccountIndex: index, toggled: true})
        }
    }
    render() {
        let html = (
            <MainSection>
                <div className="grid grid-cols-2 gap-4">
                <SubSection className="col-span-2"></SubSection>
                    <SubSection>
                        <H3>Categories</H3>
                        <div className="flex">
                            <div className="grow"/>
                            <CategoryTable 
                                categoryList={this.props.categoryList} 
                                removeCategory={(index) => this.props.removeCategory(index)} 
                                editingCategoryIndex = {this.state.editingCategoryIndex}
                                toggleEditCategory={(index) => this.toggleEditCategory(index)}
                                toggled={this.state.toggled}
                            />
                            <div className="grow"/>
                        </div>
                        <div className="inline-flex">
                            <P>new category:</P>
                            <div className="w-2"/>
                            <Input onChange={(e) => this.setState({category: e.target.value})}/>
                            <div className="w-2"/>
                            <BtnMain onClick={()=>this.props.addCategory(this.state.category)}>
                                +
                            </BtnMain>
                        </div>
                        
                    </SubSection>
                    <SubSection>
                        <H3>Accounts</H3>
                        <div className="flex">
                            <div className="grow"/>
                            <AccountTable 
                                accountList={this.props.accountList}  
                                removeAccount={(index) => this.props.removeAccount(index)}  
                                editingAccountIndex = {this.state.editingAccountIndex}
                                toggleEditAccount={(index) => this.toggleEditAccount(index)}
                                toggled={this.state.toggled}
                            />
                            <div className="grow"/>
                        </div>
                        <div className="inline-flex">
                            <P>new account:</P>
                            <div className="w-2"/>
                            <Input onChange={(e) => this.setState({account: e.target.value})}/>
                            <div className="w-2"/>
                            <BtnMain onClick={()=>this.props.addAccount(this.state.account)}>
                                +
                            </BtnMain>
                        </div>
                    </SubSection>
                </div>
            </MainSection>
            )
            if(this.state.toggled) {
                this.setState({toggled: false})
            }
            return html
        }
    }


class CategoryTable extends React.Component {
    render() {
        return (
            <Table>
                <THead>
                    <TR1>
                        <TH>Category</TH>
                        <TH></TH>
                    </TR1>
                </THead>
                <TBody>
                    {
                        this.props.categoryList.map((category,index) => 
                        <CategoryRow 
                            category={category} 
                            index={index}
                            removeCategory={() => this.props.removeCategory(index)} 
                            editingCategoryIndex = {this.props.editingCategoryIndex}
                            toggleEditCategory={()=> this.props.toggleEditCategory(index)}
                            toggled={this.props.toggled}
                        />)
                    }
                </TBody>
            </Table>
        )
    }
}
class CategoryRow extends React.Component {
    render() {
        return (
            <TR1>
                <TD>
                    {
                    this.props.editingCategoryIndex!==this.props.index?
                    this.props.category.name
                    :
                    <Input onChange={(e)=>this.props.category.name = e.target.value} {...this.props.toggled?{value: this.props.category.name}:{}}/>
                    }
                </TD>
                <TD>
                    <BtnSecondary onClick={() => this.props.toggleEditCategory()}>E</BtnSecondary> {/*TODO: allow for editing text*/}
                    <BtnMain onClick={() => this.props.removeCategory()}>X</BtnMain>
                </TD>
            </TR1>
        )
    }
}
class AccountTable extends React.Component {
    render() {
        return (
            <Table>
                <THead>
                    <TR1>
                        <TH>Account</TH>
                        <TH></TH>
                    </TR1>
                </THead>
                <TBody>
                    {
                        this.props.accountList.map((account,index) => 
                        <AccountRow 
                            account={account} 
                            index={index}
                            removeAccount={() => this.props.removeAccount(index)} 
                            editingAccountIndex = {this.props.editingAccountIndex}
                            toggleEditAccount={()=> this.props.toggleEditAccount(index)}
                            toggled={this.props.toggled}
                        />)
                    }
                </TBody>
            </Table>
        )
    }
}
class AccountRow extends React.Component {
    render() {
        return (
            <TR1>
                <TD>
                    {
                    this.props.editingAccountIndex!==this.props.index?
                    this.props.account.name
                    :
                    <Input onChange={(e)=>this.props.account.name = e.target.value} {...this.props.toggled?{value: this.props.account.name}:{}}/>
                    }
                </TD>
                <TD>
                    <BtnSecondary onClick={() => this.props.toggleEditAccount()}>E</BtnSecondary> {/*TODO: allow for editing text*/}
                    <BtnMain onClick={() => this.props.removeAccount()}>X</BtnMain>
                </TD>
            </TR1>
        )
    }
}
export default CategoryAccount;