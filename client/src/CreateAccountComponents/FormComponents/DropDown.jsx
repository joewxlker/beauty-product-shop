import { useCallback } from "react";

const DropDown = ({ timePeriod, onChange, toggle, onToggle }) => {

    const handleToggle = useCallback((type, props) => {
        if (type === 'day') {
            if (toggle.day) onToggle(type, false)
            else onToggle(type, true)
            console.log(toggle)
        }
        if (type === 'month') {
            if (toggle.month) onToggle(type, false)
            else onToggle(type, true)
            console.log(toggle)
        }
        if (type === 'year') {
            if (toggle.year) onToggle(type, false)
            else onToggle(type, true)
            console.log(toggle)
        }

    }) 
    const handleChange = useCallback((type, props) => {
        onChange(type,props)
    })
    
    const ShowList = () => {
        return (
            <div className='dd-container'>
                <ul>
                    <p className='list-items' onClick={e => {
                        e.preventDefault();
                        handleToggle(timePeriod,false);
                        handleChange(timePeriod);
                    }}>{timePeriod}</p>
                        
                    {/* {timePeriod.map((days, id) => {
                        return (
                            <li className='list-items' key={id} onClick={e => { e.preventDefault(); handleChange(timePeriod); handleToggle(timePeriod,false) }}>
                                <span className='list-items'>
                                    {days}
                                </span>
                            </li>
                        )
                    })} */}
                </ul>
            </div>
        )
    }

    return (
        <>
            <div id='day' className='dob-button' onClick={e => {e.preventDefault(); handleToggle(timePeriod, true);}}>
                <span className='button-span'><p>{timePeriod}</p>\/</span>
            </div>
            {toggle.timePeriod? (<ShowList/>):(<></>)}
        </>
    )
}

export default DropDown