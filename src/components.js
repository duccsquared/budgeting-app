import React from 'react';
import './index.css';

export class BtnMain extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick} className="text-sm bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg px-2 shadow-lg shadow-blue-800/50 hover:shadow-blue-800 active:shadow-inner">
                {this.props.children}
            </button>
        )
    }
}

export class BtnSecondary extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick} className="text-sm bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg px-2 shadow-lg shadow-indigo-800/50 hover:shadow-indigo-800 active:shadow-inner">
                {this.props.children}
            </button>
        )
    }
}

export class H1 extends React.Component {
    render() {
        return (
            <h1 className="text-6xl font-extrabold font-mono">
                {this.props.children}
            </h1>
        )
    }
}

export class H2 extends React.Component {
    render() {
        return (
            <h2 className="text-4xl font-bold font-mono">
                {this.props.children}
            </h2>
        )
    }
}

export class H3 extends React.Component {
    render() {
        return (
            <h3 className="text-2xl font-semibold font-mono">
                {this.props.children}
            </h3>
        )
    }
}

export class P extends React.Component {
    render() {
        return (
            <p className="text-sm font-mono">
                {this.props.children}
            </p>
        )
    }
}

