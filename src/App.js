import './App.css';
import {BtnMain, BtnSecondary} from './components.js';
// function logBeep() {
//   console.log(logBeep)
// }

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="text-3xl font-bold underline">
                    Budgeting Application
                </h1>
                <h2 className="text-xl font-bold">
                    Subheading
                </h2>
                <div style={{height: 20}}></div>
                <p className="text-sm">insert text here</p>
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
