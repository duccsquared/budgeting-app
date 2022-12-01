import React from 'react';
import './index.css';

function rInt(a,b) {return Math.floor(Math.random() * (b+1-a)) + a}
function rChoice(list) {return list[Math.floor(Math.random() * list.length)];}


function genRandomID(length=16) {
    let result = rChoice(["Red","Orange","Yellow","Green","Blue","Purple","White","Grey","Black","Scarlet","Cyan","Magenta","Pink","Indigo","Violet"])
    result += `-${rInt(10,99)}-`
    for(let i = 0; i < length; i++) {
        result += String.fromCharCode(rChoice([rInt(48,57),rInt(65,90),rInt(97,122)]))
    }
    return result 
}

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
            <h1 className="text-6xl font-extrabold font-mono text-white">
                {this.props.children}
            </h1>
        )
    }
}

export class H2 extends React.Component {
    render() {
        return (
            <h2 className="text-4xl font-bold font-mono text-white">
                {this.props.children}
            </h2>
        )
    }
}

export class H3 extends React.Component {
    render() {
        return (
            <h3 className="text-2xl font-semibold font-mono text-white">
                {this.props.children}
            </h3>
        )
    }
}

export class P extends React.Component {
    render() {
        return (
            <p className="text-sm font-mono text-white">
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

export class THead extends React.Component {
    render() {
        return (
            <thead className="">
                {this.props.children}
            </thead>
        )
    }
}

export class TBody extends React.Component {
    render() {
        return (
            <tbody className="">
                {this.props.children}
            </tbody>
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

export class CheckBox extends React.Component {
    render() {
        let id = this.props.id || genRandomID()
        console.log(id)
        return (
            <div className="">
                <input className="" type="checkbox" value={this.props.value || this.props.children} id={id}></input>
                <label className="p-1 text-sm font-mono" htmlFor={id}>
                    {this.props.children}
                </label>
            </div>
        )
    }
}


export class RadioBox extends React.Component {
    render() {
        let id = this.props.id || genRandomID()
        console.log("-----")
        console.log(this.props.value || this.props.children)
        return (
            <div className="">
                <input className="" type="radio" value={this.props.value || this.props.children} name={this.props.name} id={id}></input>
                <label className="p-1 text-sm font-mono" htmlFor={id}>
                    {this.props.children}
                </label>
            </div>
        )
    }
}