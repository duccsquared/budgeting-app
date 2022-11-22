import React from 'react';
import './index.css';

export default class Btn extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick} className="bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg px-2 shadow-lg shadow-indigo-800/50 hover:shadow-indigo-800">
                {this.props.children}
            </button>
            )
    }
}




