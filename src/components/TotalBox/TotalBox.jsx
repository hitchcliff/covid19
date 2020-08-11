import React, { useEffect } from 'react'
import styles from './TotalBox.module.css'

import InfoBox from '../InfoBox/InfoBox'
import { useDispatch, useSelector } from 'react-redux'
import {getCountryData, getCountryUpdate} from '../../action'
const TotalBox = () => {
   
    // PH CURRENT DATA
    const {cases, active, deaths, recovered} = useSelector(state => state.countryData.PH)

    // PH UPDATE STATE
    const {state} = useSelector(state => state.update)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getCountryData())
        dispatch(getCountryUpdate(10))

    }, [cases, active, deaths, recovered])
    
    return (
        <div className={styles.container}>
            {/* <InfoBox total={active} sub="confirmed cases"></InfoBox> */}
            <InfoBox title="Cases" total={cases} update={ state ? state.cases : null} ></InfoBox>
        
            <InfoBox title="Deaths" total={deaths} update={ state ? state.deaths : null} ></InfoBox>
            <InfoBox title="Recovered" total={recovered} update={ state ? state.recovered : null} ></InfoBox>
            
        </div>
    )
}

export default TotalBox
