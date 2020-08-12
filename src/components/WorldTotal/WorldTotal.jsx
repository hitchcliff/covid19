import React, { useEffect } from 'react'
import styles from './WorldTotal.module.css'
import { useSelector, useDispatch } from 'react-redux'
import {getWorldwideData} from '../../action'

import {numeralFormat} from '../../util'

const WorldTotal = () => {
    const worldwide = useSelector(state => state.worldwide)
    const {active, cases, deaths, recovered, 
        affectedCountries, todayCases, 
        todayDeaths, todayRecovered, population} = worldwide

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getWorldwideData())
        
    }, [])
    
    return (
        <div className={styles.container}>
            <div className={styles.total}>
                <h2>Worldwide Total</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>Total COVID-19 cases</td>
                            <td>{numeralFormat(cases)}</td>
                        </tr>
                        <tr>
                            <td>Total confirmed</td>
                            <td>{numeralFormat(active)}</td>
                        </tr>
                        <tr>
                            <td>Total deaths</td>
                            <td>{numeralFormat(deaths)}</td>
                        </tr>
                        <tr>
                            <td>Total recovered</td>
                            <td>{numeralFormat(recovered)}</td>
                        </tr>
                        <tr>
                            <td>Total number of affected countries</td>
                            <td>{numeralFormat(affectedCountries)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={styles.update}>
                <h2>Todays update</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>Cases today</td>
                            <td>{numeralFormat(todayCases)}</td>
                        </tr>
                        <tr>
                            <td>All deaths today</td>
                            <td>{numeralFormat(todayDeaths)}</td>
                        </tr>
                        <tr>
                            <td>All recovered cases today</td>
                            <td>{numeralFormat(todayRecovered)}</td>
                        </tr>
                        <tr>
                            <td>Population</td>
                            <td>{numeralFormat(population)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default WorldTotal
