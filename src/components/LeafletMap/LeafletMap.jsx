import React, {useEffect, useState} from 'react'
import styles from './LeafletMap.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAsia } from '@fortawesome/free-solid-svg-icons'

import { Map, Circle, Popup, TileLayer } from 'react-leaflet'
import numeral from 'numeral'

import { useDispatch, useSelector } from 'react-redux'
import {getCountries} from '../../action/index'

import {selectType} from '../../util'

const LeafletMap = () => {
    const [select, setSelect] = useState("cases")
    const dispatch = useDispatch();
    const countries = useSelector(state => state.countries.state)
    const position = [12.8797, 121.7740]

    useEffect(() => {
        dispatch(getCountries())        
    }, [select])
    
    // THIS CODE GOT ME IN A HOLE. 
    //Rendering Multiple Components
    const marker = (data, type = "cases") => {
        if(data) {
            const listItems = [...data].map(country => (
                <Circle key={country.country} center={[country.lat, country.lng]} radius={Math.sqrt(country[type]) * selectType[type].multiplier} fillColor={selectType[type].color} color={selectType[type].color}>
                    <Popup className="popup">
                        <img className="img-popup" src={country.flag} alt={country.name}/>
                        <span className="country">{country.country}</span>
            <h6 className="total">{country[type] > 1000000 ? numeral(country[type]).format('+0.000a') : numeral(country[type]).format('+0,0')}</h6>
                    </Popup>
                </Circle>
            ))
            return (
                <div>{listItems}</div>
            )
        }
    }
    
    const map = (
        <Map center={position} zoom={5} maxZoom={8} minZoom={3}>
            <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            
            />
            {marker(countries, select)}
        </Map>
    );

    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h6>
                    <FontAwesomeIcon icon={faGlobeAsia}/>
                    Global map cases
                    </h6>
                <select className={styles.option} name="select" id="select" value={select} onChange={e=>setSelect(e.target.value)}>
                    <option value="cases">All</option>
                    <option value="recovered">Recovered</option>
                    <option value="deaths">Deaths</option>
                    <option value="confirmed">Confirmed</option>
                </select>
            </div>
            {countries ? map : <div>Loading...</div>}
            
        </div>
    )
}

export default LeafletMap
