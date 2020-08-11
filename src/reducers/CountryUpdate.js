const initialState = {};

const CountryUpdate = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_COUNTRY_UPDATE': {
            const {timeline: {recovered, deaths, cases}} = action.payload;
            
            const allCases = {
                cases: [],
                deaths: [],
                recovered: [],
                // active: []
            }

            const getChartData = (data, type) => {
                for(let key in data) {
                    const dataPoint = {
                        date: key,
                        value: data[key]
                    }
                    type.push(dataPoint)            
                }
                
            }

            getChartData(cases, allCases.cases)
            getChartData(deaths, allCases.deaths)
            getChartData(recovered, allCases.recovered)
            //getChartData(recovered, allCases.active)
            
            return {
                ...state,
                state: allCases
            }
        }
        default:
            return state;
    }    
}

export default CountryUpdate