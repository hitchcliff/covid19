const initialState = {
    PH: {}
};
const fetchCountryData = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_COUNTRY_DATA': {
            return {
                ...state,
                PH: action.payload
            }
        }
        default: {
            return state
        }
    }
}

export default fetchCountryData
