import React from 'react';
import {H1} from './components.js';

export default class NavBar extends React.Component {
    render() {
        return (
        <nav class="navbar navbar-expand-lg shadow-md py-2 bg-zinc-700 relative flex items-center w-full justify-between">
            <div class="px-6 w-full flex flex-wrap items-center justify-between">
                <H1>Budgeting App</H1>
                <div class="flex-grow"></div>
                <ul class="navbar-nav mr-auto lg:flex lg:flex-row">
                    <li class="nav-item">
                        <a class="nav-link block pr-2 lg:px-2 py-2 text-gray-200 hover:text-gray-100 active:text-gray-300 transition duration-100 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Trends</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link block pr-2 lg:px-2 py-2 text-gray-200 hover:text-gray-100 active:text-gray-300 transition duration-100 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Data Table</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link block pr-2 lg:px-2 py-2 text-gray-200 hover:text-gray-100 active:text-gray-300 transition duration-100 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Month Overview</a>
                    </li>
                    <li class="nav-item mb-2 lg:mb-0">
                        <a class="nav-link block pr-2 lg:px-2 py-2 text-gray-200 hover:text-gray-100 active:text-gray-300 transition duration-100 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Log Out</a>
                    </li>
                </ul>
            </div>
        </nav>
        )
    }
}