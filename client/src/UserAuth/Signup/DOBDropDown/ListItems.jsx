import { useEffect } from "react";
import { useCallback, useState } from "react";

const ShowList = ({ timePeriod, onToggle, onSetTimePeriodValue,}) => {

    const numArray = [];
        for (let i = 1; i <= 31; i++){
            numArray.push(i)
    }
    const years = [];
    for (let i = 1950; i <= 2022; i++){
        years.push(i)
    }
    const obj = {
        day : numArray,
        month : ['January','February','March','April','May','June','July','August','September','October','November','December'],
        year : years
    }
    const handleToggle = useCallback((type,value) => {
        onToggle(type,value)
    })
    const handleChange = useCallback((type,value) => {
        onSetTimePeriodValue(type, value)
    })

    return (
        <div className='dd-container'>
            <ul>
                <p className='list-items' onClick={e => {
                    e.preventDefault();
                    handleToggle(timePeriod,false);
                    handleChange();
                }}>{timePeriod}</p>
                    
                {obj[timePeriod].map((days, id) => {
                    return (
                        <li className='list-items' key={id} onClick={e => { e.preventDefault(); handleChange(timePeriod,days); handleToggle(timePeriod,false) }}>
                            <span className='list-items'>
                                {days}
                            </span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ShowList