import { useEffect, useState } from "react"

const useSetTimePeriodValue = () => {
    const [timePeriodValue, setTimePeriodValue] = useState({ day: 'Day', month: 'Month', year: 'Year'})   
    return [timePeriodValue,(type,value) => setTimePeriodValue({ ...timePeriodValue, [type]: value })]
}

export default useSetTimePeriodValue
