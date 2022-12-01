import {BtnMain, BtnSecondary, H1, H2, H3, P, Table, THead, TBody, TR1, TR2, TH, TD, CheckBox, RadioBox} from '../components.js';

function HomePage() { // <div style={{height: 20}}></div>
    return (
        <div className="bg-zinc-800 min-h-screen text-white text-center">
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-4"></div>
                <div className="bg-zinc-700 col-span-2 row-span-3 flex shadow-md" justify-center>
                    <div className="grow"></div>
                    <div>
                    <Table>
                        <THead>
                            <TR1>
                                <TH>Label</TH>
                                <TH>Category</TH>
                                <TH>Amount</TH>
                            </TR1>
                        </THead>
                        <TBody>
                            <TR1>
                                <TD>Lunch</TD>
                                <TD>Food</TD>
                                <TD>10</TD>
                            </TR1>
                            <TR2>
                                <TD>Games</TD>
                                <TD>Miscellaneous</TD>
                                <TD>20</TD>
                            </TR2>
                            <TR1>
                                <TD>Dinner</TD>
                                <TD>Food</TD>
                                <TD>12</TD>
                            </TR1>
                            <TR2>
                                <TD>AC</TD>
                                <TD>Electricity</TD>
                                <TD>10</TD>
                            </TR2>
                        </TBody>

                    </Table> 
                    </div>
                    <div class="grow"></div>
                </div>
                <div class="bg-zinc-700 shadow-md">
                    <H1>Header 1</H1>
                    <H2>Header 2</H2>
                    <H3>Header 3</H3>
                    <P>paragraph</P>


                </div>
                <div class="bg-zinc-700 shadow-md">
                    <CheckBox>
                        Cool CheckBox
                    </CheckBox>
                    <RadioBox name="beep" value="1">
                        Radio 1
                    </RadioBox>
                    <RadioBox name="beep">
                        Radio 2
                    </RadioBox>
                    <RadioBox name="beep">
                        Radio 3
                    </RadioBox>
                </div>
                <div className="bg-zinc-700 col-span-2 shadow-md">
                    <BtnMain onClick={() => console.log("beep")}>
                        bonk bonk
                    </BtnMain>
                </div>
                <div className="bg-zinc-700 col-span-2 shadow-md">
                    <BtnSecondary onClick={() => console.log("boop")}>
                        beep boop
                    </BtnSecondary>
                </div>
            </div>
        </div>
    );
}

export default HomePage;