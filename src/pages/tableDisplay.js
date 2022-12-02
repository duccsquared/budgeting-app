import {MainSection, BtnMain, BtnSecondary, H1, H2, H3, P, Table, THead, TBody, TR1, TR2, TH, TD, CheckBox, RadioBox, SubSection} from '../components.js';

function TableDisplay() {
    return (
        <MainSection>
            <H2>Table Data</H2>
            <div className="grid grid-cols-6 gap-4">
                <SubSection className="col-span-6"></SubSection>
                <SubSection className="col-span-4 row-span-2">
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
                            <TR1>
                                <TD>22/11/2022</TD>
                                <TD>Lunch</TD>
                                <TD>5</TD>
                                <TD>Food</TD>
                                <TD>Chicken rice at uni</TD>
                                <TD><BtnMain>X</BtnMain></TD>
                            </TR1>
                        </TBody>

                    </Table> 
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