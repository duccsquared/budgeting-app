import {MainSection, BtnMain, BtnSecondary, H1, H2, H3, P, Table, THead, TBody, TR1, TR2, TH, TD, CheckBox, RadioBox, SubSection, Input, TextArea} from '../components.js';

function AddTransaction() {
    return (
        <MainSection>
            <H2>Transaction Entry</H2>
            <div className="grid grid-cols-6 gap-4">
                <SubSection className="col-span-3">
                    <div className="h-4"/>
                    <div className="inline-flex">
                        <P>label:</P>
                        <div className="w-2"/>
                        <Input/>
                    </div>
                    <div className="h-4"/>
                    <div className="inline-flex">
                        <P>date:</P>
                        <div className="w-2"/>
                        <Input/>
                    </div>
                    <div className="h-4"/>
                    <div className="inline-flex">
                        <P>amount:</P>
                        <div className="w-2"/>
                        <Input/>
                    </div>
                    <div className="h-4"/>
                </SubSection>
                <SubSection className="col-span-3">
                    <div className="h-4"/>
                    <div className="inline-flex">
                        <P>category:</P>
                        <div className="w-2"/>
                        <Input/>
                    </div>
                    <div className="h-4"/>
                    <div className="inline-flex">
                        <P>account:</P>
                        <div className="w-2"/>
                        <Input/>
                    </div>
                    <div className="h-4"/>
                </SubSection>
                <SubSection className="col-span-6">
                    <div className="h-4"/>
                    <P className="text-left">description:</P>
                    <div className="h-4"/>
                    <TextArea/>
                    <div className="h-4"/>
                </SubSection>
                <div className="col-span-2"></div>
                <SubSection className="col-span-2">
                    <div className="h-2"/>
                    <BtnMain>Confirm</BtnMain>
                    <BtnSecondary>Cancel</BtnSecondary>
                    <div className="h-2"/>
                </SubSection>
            </div>
        </MainSection>
    )
}

export default AddTransaction;