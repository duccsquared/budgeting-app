import React from 'react';
import {H1, BtnMinim} from './components.js';
import {useNavigate} from "react-router-dom"

export default function NavBar(props) {
    let navigate = useNavigate();
    return (
    <nav className="navbar navbar-expand-lg shadow-md py-2 bg-zinc-700 relative flex items-center w-full justify-between">
        <div className="px-6 w-full flex flex-wrap items-center justify-between">
            <H1>Budgeting App</H1>
            <div className="flex-grow"></div>
            <ul className="navbar-nav mr-auto lg:flex lg:flex-row">
                <li className="nav-item">
                    <BtnMinim onClick={() => navigate("/graphDisplay")}>Trends</BtnMinim>
                </li>
                <li className="nav-item">
                    <BtnMinim onClick={() => navigate("/tableDisplay")}>Data Table</BtnMinim>
                </li>
                <li className="nav-item">
                    <BtnMinim onClick={() => navigate("/chartDisplay")}>Month Overview</BtnMinim>
                </li>
                <li className="nav-item mb-2 lg:mb-0">
                    <BtnMinim onClick={() =>{props.setSelectedTransaction(null); navigate("/addTransaction")}}>Add Entry</BtnMinim>
                </li>
                <li className="nav-item mb-2 lg:mb-0">
                    <BtnMinim onClick={() => navigate("/categoryAccount")}>Modify Categories or Accounts</BtnMinim>
                </li>
                <li className="nav-item mb-2 lg:mb-0">
                    <BtnMinim onClick={() => navigate("/")}>Log Out</BtnMinim>
                </li>

            </ul>
        </div>
    </nav>
    )
}