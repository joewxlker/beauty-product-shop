import { useState } from "react"

export const useSetMonth = () => {

    const [month, setMonth] = useState('Month')

    const SetMonth = (props) => {
        setMonth(props)
    }
    // console.log(month)

    return[month,SetMonth]
}

export const useSetDay = () => {

    const [day, setDay] = useState('Day')

    const SetDay = (props) => {
        setDay(props)
    }

    return[day,SetDay]
}

export const useSetYear = () => {

    const [year, setYear] = useState('Year')

    const SetYear = (props) => {
        setYear(props)
    }
    // console.log(year)

    return[year,SetYear]
}

