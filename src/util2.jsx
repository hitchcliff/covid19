export const checkDifferenceBetweenNewAndOldCases = (timeline, caseType) => {
    let final = [];
    let lastDataPoint;
    for(let key in timeline[caseType]) {
        const DATE = key;
        const value = timeline[caseType][DATE];
        // HOW TO CHECK LAST DATE AND CURRENT DATE
        // CHECKING IF OUR KEY EXIST
        // HOW TO CHECK  NEW KEYS AND OLD KEYS TO GET THE DIFFERENCE
        if(lastDataPoint) {
            const newDataPoint = {
                date: DATE,
                value: value - lastDataPoint
            }
            final.push(newDataPoint);
        }
        lastDataPoint = timeline[caseType][DATE]
    }

    return final
}

export const getNewData = (countries) => {
    let data = [];
    for(let type in countries) {
        const caseType = {
            cases: countries[type].cases,
            deaths: countries[type].deaths,
            recovered: countries[type].recovered,
            confirmed: countries[type].active,
            country: countries[type].country,
            flag: countries[type].countryInfo.flag,
            iso3: countries[type].countryInfo.iso3,
            lat: countries[type].countryInfo.lat,
            lng: countries[type].countryInfo.long
        }
        data.push(caseType)
    }
    return data;
}