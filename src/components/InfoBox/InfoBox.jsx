import React, {useState, useEffect} from 'react'
import styles from './InfoBox.module.css'
import cx from 'classnames'
import numeral from 'numeral'
import {Line} from 'react-chartjs-2'

import {getIcon} from '../../util'
import {findColor} from '../../util'

const InfoBox = ({title, sub, total, update}) => {

    const [option, setOption] = useState({})
    const [data, setData] = useState({})

    useEffect(() => {
        if(update) {
            const value = [...update].map(item => item.value);
            const date = [...update].map(item => item.date);
            
            const data = {
                labels: date,
                datasets: [
                    {
                        label: title,
                        data: value,
                        fill: true,
                        borderColor: findColor(title),
                        lineTension: .4,
                        pointBackgroundColor: findColor(title, .5),
                        backgroundColor: findColor(title, .2)
                    }, 
                ]
            }

            setData(data)
        }

        const option = {
            responsive: true,
            legend: {
                display: true,
                labels: {
                    fontSize: 15,
                    fontFamily: "'Raleway', 'sans-serif'",
                    boxWidth: 20
                }
            },
            scales: {
                xAxes: [{
                    display: true, //this will remove all the x-axis grid lines
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
    }, [update])


    return (
        <div className={cx(styles.container, title)} >
            {title? <h6>
                {getIcon(title)}
                Total {title.toLowerCase()}
            </h6> : null }
            <div className={styles.total}>
                <span>
                    {total > 1000000 ? numeral(total).format('+0.000a') : numeral(total).format('0,0')}
                </span>
                {sub ? <h4 className={styles.sub}>currenly {sub} <br/> in the philippines <br/> </h4> : null}
            </div>
            
            <div className={styles.graph}>
                {update ? <Line options={option} data={data}/> : null}
            </div>
            {/* <span style={{fontSize: ".5rem"}}>Source: disease.sh - Open Disease Data</span> */}
        </div>
    )
}

export default InfoBox
