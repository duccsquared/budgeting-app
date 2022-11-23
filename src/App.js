import './App.css';
import {BtnMain, BtnSecondary, H1, H2, H3, P} from './components.js';
// function logBeep() {
//   console.log(logBeep)
// }

function App() { // <div style={{height: 20}}></div>
    return (
        <div className="App">
            <header className="App-header">
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
            </header>
        </div>
    );
}

export default App;
