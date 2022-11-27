import './App.css';
import {BtnMain, BtnSecondary, H1, H2, H3, P, Table, TR1, TR2, TH, TD, CheckBox, RadioBox} from './components.js';
// function logBeep() {
//   console.log(logBeep)
// }

function App() { // <div style={{height: 20}}></div>
    return (
        <div className="App">
            <header className="App-header">

            </header>
            <body className="App-body">
                <H1>Header 1</H1>
                <H2>Header 2</H2>
                <H3>Header 3</H3>
                <P>paragraph</P>
                <BtnMain onClick={() => console.log("beep")}>
                    bonk bonk
                </BtnMain>
                <BtnSecondary onClick={() => console.log("boop")}>
                    beep boop
                </BtnSecondary>
                <Table>
                    <TR1>
                        <TH>Label</TH>
                        <TH>Category</TH>
                        <TH>Amount</TH>
                    </TR1>
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
                </Table> 
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
            </body>
        </div>
    );
}

export default App;
