import {combineReducers} from 'redux'

import fetchCountryData from './fetchCountryData'
import CountryUpdate from './CountryUpdate'
import CountriesReducer from './CountriesReducer'
import CountryUpdateReducer from './CountryUpdateReducer'
import getWorldwideDataReducer from './getWorldwideDataReducer'

export default combineReducers({
    countryData: fetchCountryData,
    update: CountryUpdate,
    countries: CountriesReducer,
    custom: CountryUpdateReducer,
    worldwide: getWorldwideDataReducer
})