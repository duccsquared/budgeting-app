import React from 'react';
import './index.css';

export class BtnMain extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick} className="bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg px-2 shadow-lg shadow-blue-800/50 hover:shadow-blue-800 active:shadow-inner">
                {this.props.children}
            </button>
            )
    }
}

export class BtnSecondary extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick} className="bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg px-2 shadow-lg shadow-indigo-800/50 hover:shadow-indigo-800 active:shadow-inner">
                {this.props.children}
            </button>
            )
    }
}


