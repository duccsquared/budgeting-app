import React from 'react';
import {MainSection, BtnMain, BtnSecondary, H1, H2, H3, P, Table, THead, TBody, TR1, TR2, TH, TD, CheckBox, RadioBox, SubSection, BtnMinim, Input} from '../components.js';

class CategoryAccount extends React.Component {
    render() {
        return (
            <MainSection>
                <div className="grid grid-cols-2 gap-4">
                <SubSection className="col-span-2"></SubSection>
                    <SubSection>
                        <H3>Categories</H3>
                        <div className="flex">
                            <div className="grow"/>
                            <CategoryTable categoryList={this.props.categoryList} removeCategory={(index) => this.props.removeCategory(index)}/>
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
                            <AccountTable accountList={this.props.accountList}  removeAccount={(index) => this.props.removeAccount(index)}/>
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
                        this.props.categoryList.map((category,index) => <CategoryRow category={category} removeCategory={() => this.props.removeCategory(index)}/>)
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
                    {this.props.category}
                </TD>
                <TD>
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
                    </TR1>
                </THead>
                <TBody>
                    {
                        this.props.accountList.map((account,index) => <AccountRow account={account} removeAccount={() => this.props.removeAccount(index)}/>)
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
                    {this.props.account}
                </TD>
                <TD>
                    <BtnMain onClick={() => this.props.removeAccount()}>X</BtnMain>
                </TD>
            </TR1>
        )
    }
}
export default CategoryAccount;