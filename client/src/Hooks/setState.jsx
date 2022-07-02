import { useEffect, useState } from "react"

const useSetState = () => {
    const [state, setState] = useState({formLoading: false}) 
    return [state,(type,value) => setState({ ...state, [type]: value })]
}

export default useSetState
