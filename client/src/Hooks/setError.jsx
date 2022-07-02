import { useEffect, useState } from "react"

const useSetError = () => {
    const [error, setError] = useState({})
    return [error,(type,value) => setError({ ...error, [type]: value })]
}

export default useSetError
