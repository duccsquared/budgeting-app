import {BtnMain, BtnSecondary, H1, H2, H3, P, Table, TR1, TR2, TH, TD, CheckBox, RadioBox} from './components.js';
import NavBar from './navbar.js'
import HomePage from './home/home.js'
import ChartDisplay from './chartDisplay/chartDisplay.js'
import GraphDisplay from './graphDisplay/graphDisplay.js'
import TableDisplay from './tableDisplay/tableDisplay.js'

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
// function logBeep() {
//   console.log(logBeep)
// }

function App() { // <div style={{height: 20}}></div>
    return (
        <Router>
            <NavBar></NavBar>
            <Routes>
                <Route path="/" element={<HomePage></HomePage>}></Route>
                <Route path="/chartDisplay" element={<ChartDisplay></ChartDisplay>}></Route>
                <Route path="/graphDisplay" element={<GraphDisplay></GraphDisplay>}></Route>
                <Route path="/tableDisplay" element={<TableDisplay></TableDisplay>}></Route>
            </Routes>
        </Router>
    );
}

export default App;
