import React from 'react'
import styles from './Home.module.css'

import {TotalBox, WorldTotal, Rate, LeafletMap, Country, Footer} from '../../components'

import Notify from '../../assets/notify.svg'
import { useSelector} from 'react-redux'

import {numeralFormat} from '../../util'
const Home = () => {
    const {active} = useSelector(state => state.countryData.PH)
    
    return (
        <div className={styles.container}>
            <div className={styles.showcase}>
                <span>Data may be incomplete for the current day or week.</span>
                <h1 className={styles.showcase__heading}>There have been&nbsp; 
                <span className={styles.active}>{active? numeralFormat(active) : null}</span><br></br> 
                confirmed cases in the Philippines</h1>
                <div>
                    <button className={styles.showcase__button}>learn more</button>
                </div>
            </div>
            <TotalBox />
            <div className={styles.guideContainer}>
                <div className={styles.guide}>
                    <h2 className={styles.guide__heading}>How to protect yourself<br></br> from COVID-19</h2>
                    <ul className={styles.guide__lists}>
                        <li>Stay at home as much as you can</li>
                        <li>Keep a safe distance</li>
                        <li>Wash hands often</li>
                        <li>Cover your cough</li>
                        <li>If you're sick, call ahead</li>
                    </ul>
                    <button className={styles.guide__button}> 
                        <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public" target="_blank">
                        More info
                        </a>
                    </button>
                </div>  
                <img src={Notify} alt="undraw.co"/>
            </div>
            <div className={styles.world}>
                <WorldTotal></WorldTotal>
                <div className={styles.worldReminder}>
                    <h2 className={styles.world__heading}>Quick reminder</h2>
                    <p className={styles.world__description}>Wear a cloth face covering to cover your mouth and nose when around others and when you must go out in public.</p>
                    <a className={styles.world__link} href="https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/coronavirus-safety" target="_blank">Learn more</a>
                </div>
            </div>
            <div className={styles.donation}>
                <div className={styles.donationContainer}>
                    <div className={styles.left}>
                        <h2 className={styles.donation__heading}>Find the site helpful?</h2>
                        <p>Please consider fueling it by donating a small amount to help with the server hosting costs. Every penny received will be spent for the site's maintenance.</p>
                    </div>
                    <div className={styles.right}>
                        <button className={styles.right__button}>buy coffe</button>
                    </div>
                </div>
            </div>
            <div className={styles.graphContainer}>
                <Rate></Rate>
            </div>
            <div className={styles.map}>
                <LeafletMap></LeafletMap>
                <Country></Country>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Home
