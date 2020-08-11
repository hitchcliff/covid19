import React from 'react'
import numeral from 'numeral'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVirusSlash } from '@fortawesome/free-solid-svg-icons'
import { faSkull } from '@fortawesome/free-solid-svg-icons'
import { faVirus } from '@fortawesome/free-solid-svg-icons'
import { faClinicMedical } from '@fortawesome/free-solid-svg-icons'

export const getIcon = (title) => {
    if(title === 'Recovered') {
        return <FontAwesomeIcon icon={faVirusSlash}/>
    }
    if(title === 'Deaths') {
        return <FontAwesomeIcon icon={faSkull}/>
    }
    if(title === 'Confirmed') {
        return <FontAwesomeIcon icon={faVirus}/>
    }
    if(title === 'Cases') {
        return <FontAwesomeIcon icon={faClinicMedical}/>
    }
}

export const findColor = (title, opaque = 1) => {
    if(title === 'Deaths') {
        return `rgb(230,1,5, ${opaque})`
    }
    if(title === 'Cases') {
        return `rgb(0,123,189, ${opaque})`
    }
    if(title === 'Recovered') {
        return `rgba(44,187,1,${opaque})`
    }
}

export const selectType = {
    cases: {
        color: 'rgba(0,0,255,.5)',
        multiplier: 800
    },
    deaths: {
        color: 'rgba(255,0,0,.5)',
        multiplier: 900
    },
    confirmed: {
        color: 'gray',
        multiplier: 1000
    },
    recovered: {
        color: 'rgba(0,255,0,.5)',
        multiplier: 1100
    }
}

export const forceIterateState = (value, state) => {
    let final = {
        date: [],
        value: []
    }
    for(let i=0; i<value; i++) {
        if(state[i] !== undefined) {
            let value = state[i].value
            let date = state[i].date

            final.date.push(date);
            final.value.push(value);
        }
    }
    return final;
}

export const DateAndValueFormatter = (type) => {

    function dateFormat(date) {
       
        const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' }) 
        const [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat.formatToParts(date) 
        
        return `${month} ${day}, ${year }`
    }

    if(type) {
        return numeral(type[type.length - 1]).format('0,0');
    } 
    return dateFormat(new Date());
    
}

export const textCapitalizeFormatter = (text) => {
    let first= text.split("")[0].toUpperCase();
    let second = text.split("").splice(1).join("");

    let final = [];
    final.push(first, second)
    
    return final.join("")
}

export const numberInDescendingOrder = (data) => {
    let numbers = [...data];
    let final = [];
    numbers.map(num => {
        return final.push(num.cases)
    })
    final.sort((a,b) => a-b).reverse();
    
    return final;
}