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
                    <TransactionTable transactionList={props.transactionList} removeEntry={(index) => props.removeEntry(index)}/>
                </SubSection>
                <SubSection>
                    <P>data type</P>
                    <RadioBox name="dataType" value="net">net cashflow</RadioBox>
                    <RadioBox name="dataType" value="in">inflow</RadioBox>
                    <RadioBox name="dataType" value="out">outflow</RadioBox>
                </SubSection>
                <SubSection>    
                    <P>accounts</P>
                    <CheckBox value="">cash</CheckBox>
                    <CheckBox value="">bank</CheckBox>
                    <CheckBox value="">steam</CheckBox>
                </SubSection>
                <SubSection>
                    <P>clustering</P>
                    <RadioBox name="clustering" value="sep">separate entities</RadioBox>
                    <RadioBox name="clustering" value="day">cluster by day</RadioBox>
                    <RadioBox name="clustering" value="month">cluster by month</RadioBox>
                </SubSection>
                <CategorySection categoryList={props.categoryList}/>
            </div>
        </MainSection>
    )
}

class CategorySection extends React.Component {
    render() {
        let categoryList = this.props.categoryList
        return (
            <SubSection>
                <P>categories</P>
                {categoryList.map((category) => <CheckBox value="">{category}</CheckBox>)}
            </SubSection>
        )
    }
}

export default TableDisplay