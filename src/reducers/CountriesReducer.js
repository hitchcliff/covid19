import {getNewData} from '../util2'

const initialState = [];

const CountriesReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_COUNTRIES': {
            const data = getNewData(action.payload)
            return {
                ...state,
                state: data
            }
        }
        default: return state
    }
}

export default CountriesReducer