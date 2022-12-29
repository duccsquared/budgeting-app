/*
Page that displays the budgeting data in the form of a graph
*/
import React from 'react';
import {MainSection, BtnMain, BtnSecondary, H1, H2, H3, P, Table, THead, TBody, TR1, TR2, TH, TD, CheckBox, RadioBox, SubSection, BtnMinim, InputDate} from '../components.js';
import DataTypeSection, { AccountSection, CategorySection, DateRangeSection } from '../dataOptionComponents.js';
import Chart from 'chart.js/auto';
import 'chartjs-adapter-date-fns'; // needed to get graph to work

class GraphDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            groupBy: "day",
            dataType: "net",
            startDate: null,
            endDate: null        
        }
    }
    render() {

        return (
            <MainSection>
            <H2>Graph</H2>
            <div className="grid grid-cols-6 gap-4">
                <SubSection className="col-span-6"></SubSection>
                <SubSection className="col-span-4 row-span-2">
                    <DataGraph 
                        transactionList = {this.props.transactionList}
                        startDate = {this.state.startDate}
                        endDate = {this.state.endDate}
                        dataType = {this.state.dataType}
                    />
                </SubSection>
                <DataTypeSection onRadio={(dataType)=>this.setState({dataType:dataType})}/>
                <AccountSection accountList={this.props.accountList} update={()=>this.props.update()}/>
                <DateRangeSection 
                    setStartDate={(e) => this.setState({startDate: e.target.value})} 
                    setEndDate={(e) => this.setState({endDate: e.target.value})}
                />
                <CategorySection categoryList={this.props.categoryList} update={()=>this.props.update()}/>
            </div>
        </MainSection>
        )
    }

}

class DataGraph extends React.Component {
    constructor(props) {
        super(props)
        this.chartLoaded = false
        this.chart = null
    }
    processTransactionList() {
        let transactionList = this.props.transactionList
        if(transactionList.length===0) {
            return []
        }
        let startDate = this.props.startDate || null
        let endDate = this.props.endDate || null 
        if(startDate===null || endDate===null) {
            startDate = (new Date(transactionList[0].date)).getTime()
            endDate = (new Date(transactionList[0].date)).getTime()
            for(let index in transactionList) {
                let date = (new Date(transactionList[index].date)).getTime()
                if(date<startDate) {
                    startDate = date 
                }
                if(date>endDate) {
                    endDate = date
                }
            }
        }
        else {
            startDate = (new Date(startDate)).getTime()
            endDate = new Date(endDate).getTime()
        }
        transactionList = transactionList.filter((transaction) => transaction.category.checked && transaction.account.checked)
        if(this.props.dataType==="in") {
            transactionList = transactionList.filter((transaction) => transaction.amount>=0)
        }
        else if(this.props.dataType==="out") {
            transactionList = transactionList.filter((transaction) => transaction.amount<=0)
        }
        transactionList = transactionList.filter((transaction) => {let d = (new Date(transaction.date)).getTime(); return d >= startDate && d <= endDate})
        let date = startDate
        let xList = []
        while(date<=endDate) {
            xList.push(date - 25200000) // subtract by 7 hours to make date start at midnight
            date += 86400000 // miliseconds in a day
        }
        let yList = new Array(xList.length).fill(0);
        for(let index in transactionList) {
            let transaction = transactionList[index]
            let date = (new Date(transaction.date)).getTime()
            yList[((date - startDate)/(endDate - startDate))*(xList.length-1)] += parseInt(transaction.amount) 
        }
        return [xList,yList]
    }
    componentDidMount() {
        if(!this.chartLoaded) {
            this.chartLoaded = true
            Chart.defaults.color = '#FFFFFF';
            let vals = this.processTransactionList()
            let xValues = vals[0]
            let yValues = vals[1]
            this.chart = new Chart("myChart", {
                type: "line",
                data: {
                    labels: xValues,
                    datasets: [{
                        data: yValues,
                    }]
                },
                options:{
                    elements:{
                        point:{
                            backgroundColor: "rgba(0,0,255,1.0)",
                            borderColor: "rgba(255,255,255,1.0)",
                        },
                        line:{
                            borderColor: "rgba(255,255,255,0.7)",
                        }
                    },
                    plugins: {
                        legend: {
                            display: false,
                            labels: {
                                color: 'rgb(255, 99, 132)'
                            }
                        }
                    },
                    scales: {
                        x: {
                            type: 'time',
                            time: {
                                unit: 'day'
                            }
                        }
                    }
                }
            })
        }
    }
    render() {
        if(this.chartLoaded) {
            let vals = this.processTransactionList()
            let xValues = vals[0]
            let yValues = vals[1]
            this.chart.data = {
                labels: xValues,
                datasets: [{
                    data: yValues,
                }]
            }
            this.chart.update();
        }
        return (
            <div>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"/>
                
                <canvas id="myChart"></canvas>

            </div>
        )
    }
}

export default GraphDisplay