import { useEffect } from "react"
import { useState } from "react"

export const useToggleDay = () => {

    const [dayToggle, setToggle] = useState(false)
    // console.log(dayToggle)
    const setDayToggle = (props) => {
        setToggle(props)
    }

    return[dayToggle,setDayToggle]
}

export default useToggleDay

export const useToggleMonth = () => {

    const [monthToggle, setToggle] = useState(false)
    // console.log(monthToggle)
    const SetMonthToggle = (props) => {
            setToggle(props)
    }
    return[monthToggle,SetMonthToggle]
}


export const useToggleYear = () => {

    const [yearToggle, setToggle] = useState(false)

    const setYearToggle = (props) => {

        setToggle(props)
        }

    return[yearToggle,setYearToggle]
}
