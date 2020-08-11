import React from 'react'
import styles from './Country.module.css'
import numeral from 'numeral'
import {useSelector } from 'react-redux'

import {WorldTotal} from '../../components'

import {numberInDescendingOrder} from '../../util'
const Country = () => {
    const countries = useSelector(state => state.countries.state)

    if(!countries) return null;
    const num = numberInDescendingOrder(countries);
    
    return (
        <div className={styles.container}>
            <div className={styles.lists}>
                <h2>All Countries affected by COVID-19 Cases</h2>
                <table className={styles.countries}>
                    <tbody>
                        {countries.map((country, index) => {
                            return(
                                <tr key={index}>
                                    <td className={styles.countries__countries}>{country.country}</td>
                                    <td className={styles.countries__cases}>{numeral(num[index]).format('0,0')}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
                        <WorldTotal></WorldTotal>
        </div>
    )
}

export default Country
