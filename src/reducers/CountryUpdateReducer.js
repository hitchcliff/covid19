const initialState = {

}

const CountryUpdateReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        
        case 'FETCH_COUNTRY_UPDATE_CUSTOM':
            return { ...state, ...payload }

        default:
            return state
    }
}

export default CountryUpdateReducer