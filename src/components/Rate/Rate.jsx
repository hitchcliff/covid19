import React, { useEffect, useState } from 'react'
import styles from './Rate.module.css'
import {Bar} from 'react-chartjs-2'

import numeral from 'numeral'

import { useDispatch, useSelector } from 'react-redux'
import {CountryUpdateAction} from '../../action'

import {forceIterateState, findColor, DateAndValueFormatter, textCapitalizeFormatter} from '../../util.jsx'

const Rate = () => {
    const [option, setOption] = useState({})
    const [data, setData] = useState({})
    const value = 60;

    const [select, setSelect] = useState("Cases");
    const [finalDate, setFinalStoreDate] = useState([])
    const [finalValue, setFinalStoreValue] = useState([])

    const dispatch = useDispatch()
    const state = useSelector(state => state.custom)
    
    useEffect(() => {
        dispatch(CountryUpdateAction(value, select))
    }, [select])

    useEffect(() => {
        if(state) {
            const final = forceIterateState(value, state);
            setFinalStoreDate(final.date);
            setFinalStoreValue(final.value)
            const data = {
                labels: final.date,
                datasets: [
                    {
                        label: textCapitalizeFormatter(select),
                        data: final.value,
                        backgroundColor: findColor(textCapitalizeFormatter(select), 1)
                    }
                ],
            }
            const option = {
                responsive: true,
                scaleBeginAtZero: true,
                scales: {
                    xAxes: [{
                        gridLines: {
                            display: false,
                            offsetGridLines: true
                        },
                        type: "time",
                        time: {
                            parser: "MM/DD/YY",
                            tooltipFormat: "ll",
                        },
                    }],
                    yAxes: [
                        {
                            display: true, //this will remove all the x-axis grid lines
                            ticks: {
                                callback: function(value, index, labels) {
                                    return numeral(value).format("0a");
                                }
                            },
                            gridLines: {
                                display: false,
                            },
                        }
                    ]
                }
                
            }
            setOption(option)
            setData(data)
        }
        
    }, [state, select])

    const display = (select) => {
        if(select === "Cases") {
            return " confirmed cases"
        } return " "+select.toLowerCase() + " cases"
    }

    return (
        <div className={styles.container}>
            
            <div className={styles.graph}>
                <div>
                    <h2>As of {DateAndValueFormatter()}, there have been new&nbsp; 
                    <span style={{color: `${findColor(textCapitalizeFormatter(select))}`}}>{DateAndValueFormatter(finalValue)} </span>
                    {display(select)} <br/>of COVID-19 in the Philippines</h2>
                    <select onChange={e=> setSelect(e.target.value)}>
                        <option value="cases">Cases</option>
                        <option value="recovered">Recovered</option>
                        <option value="deaths">Deaths</option>
                    </select>
                </div>
                <div className={styles.graphContainer}>
                    <Bar options={option} data={data}></Bar>
                    <div className={styles.graphContainer__block}>

                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Rate
