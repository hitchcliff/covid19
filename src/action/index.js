import axios from 'axios'
import {checkDifferenceBetweenNewAndOldCases} from '../util2'

export const getWorldwideData = () => async dispatch => {
    const {data} = await axios.get('https://disease.sh/v3/covid-19/all');
    dispatch({
        type: 'FETCH_WORLDWIDE_DATA',
        payload: data
    })
}

export const getCountryData = () => async dispatch => {
    const {data} = await axios.get('https://disease.sh/v3/covid-19/countries/philippines');
    
    dispatch({
        type: 'FETCH_COUNTRY_DATA',
        payload: data
    })
}

export const getCountryUpdate = (days = 20) => async dispatch => {
    const {data} = await axios.get(`https://disease.sh/v3/covid-19/historical/philippines?lastdays=${days}`)
    dispatch({
        type: 'FETCH_COUNTRY_UPDATE',
        payload: data
    })
}

export const getCountries = () => async dispatch => {
    const {data} = await axios.get('https://disease.sh/v3/covid-19/countries');
    
    dispatch({
        type: 'FETCH_COUNTRIES',
        payload: data
    })
}

export const CountryUpdateAction = (days = 50, caseType="cases") => async dispatch => {
    const {data} = await axios.get(`https://disease.sh/v3/covid-19/historical/philippines?lastdays=${days}`)
    const timeline = data.timeline;
    
    const final = checkDifferenceBetweenNewAndOldCases(timeline, caseType.toLowerCase())
    dispatch({
        type: 'FETCH_COUNTRY_UPDATE_CUSTOM',
        payload: final
    })
}