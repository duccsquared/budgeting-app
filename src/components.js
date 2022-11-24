import React from 'react';
import './index.css';

export class BtnMain extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick} className="text-sm font-mono bg-blue-600 transition duration-100 ease-in-out hover:bg-blue-500 active:bg-blue-700 rounded-lg px-2 shadow-lg shadow-blue-800/50 hover:shadow-blue-800 active:shadow-inner">
                {this.props.children}
            </button>
        )
    }
}

export class BtnSecondary extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick} className="text-sm font-mono bg-indigo-600 transition duration-100 ease-in-out hover:bg-indigo-500 active:bg-indigo-700 rounded-lg px-2 shadow-lg shadow-indigo-800/50 hover:shadow-indigo-800 active:shadow-inner">
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

export class Table extends React.Component {
    render() {
        return (
            <table className="">
                {this.props.children}
            </table>
        )
    }
}

export class TR1 extends React.Component {
    render() {
        return (
            <tr className="bg-zinc-600 shadow-lg hover:bg-zinc-400 transition duration-100 ease-in-out">
                {this.props.children}
            </tr>
        )
    }
}

export class TR2 extends React.Component {
    render() {
        return (
            <tr className="bg-zinc-500 shadow-lg hover:bg-zinc-400 transition duration-100 ease-in-out">
                {this.props.children}
            </tr>
        )
    }
}

export class TH extends React.Component {
    render() {
        return (
            <th className="text-sm font-mono bg-zinc-700 border-2 border-zinc-800">
                {this.props.children}
            </th>
        )
    }
}

export class TD extends React.Component {
    render() {
        return (
            <td className="text-sm font-mono border-2 border-zinc-800">
                {this.props.children}
            </td>
        )
    }
}