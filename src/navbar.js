import React from 'react';
import {H1} from './components.js';
import {useNavigate} from "react-router-dom"

export default function NavBar() {
    let navigate = useNavigate();
    return (
    <nav className="navbar navbar-expand-lg shadow-md py-2 bg-zinc-700 relative flex items-center w-full justify-between">
        <div className="px-6 w-full flex flex-wrap items-center justify-between">
            <H1>Budgeting App</H1>
            <div className="flex-grow"></div>
            <ul className="navbar-nav mr-auto lg:flex lg:flex-row">
                <li className="nav-item">
                    <button className="nav-link block pr-2 lg:px-2 py-2 text-gray-200 hover:text-gray-100 active:text-gray-300 transition duration-100 ease-in-out" onClick={() => navigate("/graphDisplay")} data-mdb-ripple="true" data-mdb-ripple-color="light">Trends</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link block pr-2 lg:px-2 py-2 text-gray-200 hover:text-gray-100 active:text-gray-300 transition duration-100 ease-in-out" onClick={() => navigate("/tableDisplay")} data-mdb-ripple="true" data-mdb-ripple-color="light">Data Table</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link block pr-2 lg:px-2 py-2 text-gray-200 hover:text-gray-100 active:text-gray-300 transition duration-100 ease-in-out" onClick={() => navigate("/chartDisplay")} data-mdb-ripple="true" data-mdb-ripple-color="light">Month Overview</button>
                </li>
                <li className="nav-item mb-2 lg:mb-0">
                    <button className="nav-link block pr-2 lg:px-2 py-2 text-gray-200 hover:text-gray-100 active:text-gray-300 transition duration-100 ease-in-out" onClick={() => navigate("/")} data-mdb-ripple="true" data-mdb-ripple-color="light">Log Out</button>
                </li>
            </ul>
        </div>
    </nav>
    )
}