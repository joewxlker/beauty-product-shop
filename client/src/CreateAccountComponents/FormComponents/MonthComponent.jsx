import { useCallback } from "react"

const MonthDropDown = (
    { month, onMonthChange, monthToggle, onMonthToggle,
    day, onDayChange, dayToggle, onDayToggle, onDayCountChange,
    year, onYearChange, yearToggle, onYearToggle }) => {
    

    let monthArray = ['January', 'February', 'March', /*'April',*/ 'May', /*'June',*/ 'July', 'August', 'September', 'October',/* 'November',*/ 'December']
    let smallMonthArray = ['April','June','November',]

    const handleMonthChange = useCallback((props) => {
        onMonthChange(props)
        if (props === 'February') {
            onDayCountChange(30)
        } else if (props === smallMonthArray) {
            onDayCountChange(31)
        } else onDayCountChange(32)
    })

    const handleMonthToggle = useCallback((props) => {
        onMonthToggle(props)
    })

    return (
        <>
            {!monthToggle ? (
                <div id='month' name='month' className='dob-button' onClick={e => {
                    e.preventDefault();
                    handleMonthToggle(true)
                }}>
                    <span className='button-span'><p>{month}</p>\/</span>
                </div>
            ) : (
                <>
                    <div id='month' name='month' className='dob-button' onClick={e => {
                            e.preventDefault();
                            handleMonthToggle(false)
                        
                    }}>
                            <span className='button-span'><p>{month}</p>\/</span>
                    </div>
                    <span className='dd-span'>
                        <div className='dd-container'>
                                <p className='list-items' onClick={e => { e.preventDefault(); handleMonthToggle(false); handleMonthChange(month)}}>Month</p>
                            <ul>
                                {monthArray.map((months, id) => {
                                    return (
                                        <li className='list-items' key={id} onClick={e => { e.preventDefault(); handleMonthChange(months);  handleMonthToggle(false)}}>
                                            <span className='list-items'>
                                                {months}
                                            </span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </span >
                </>
            )
            }
        </>
    )
}
    
export default MonthDropDown