const initialState = {

}

const getWorldwideDataReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'FETCH_WORLDWIDE_DATA':
            return { ...state, ...payload }

        default:
            return state
    }
}

export default getWorldwideDataReducer
