import {MainSection, BtnMain, BtnSecondary, H1, H2, H3, P, Table, THead, TBody, TR1, TR2, TH, TD, CheckBox, RadioBox, SubSection} from '../components.js';
import TransactionTable from '../transactionTable.js';

function TableDisplay(props) {
    return (
        <MainSection>
            <H2>Table Data</H2>
            <div className="grid grid-cols-6 gap-4">
                <SubSection className="col-span-6"></SubSection>
                <SubSection className="col-span-4 row-span-2">
                    <TransactionTable transactionList={props.transactionList}/>
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
                <SubSection>
                    <P>categories</P>
                    <CheckBox value="">food</CheckBox>
                    <CheckBox value="">groceries</CheckBox>
                    <CheckBox value="">furniture</CheckBox>
                </SubSection>
            </div>
        </MainSection>
    )
}

export default TableDisplay