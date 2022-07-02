import { useEffect, useState } from "react";

const useSetForm = () => {
    const [value, setForm] = useState({}); 
    return [value, (props,event) => { event.preventDefault();   setForm({ ...value, [props]:event.target.value })}]
}

export default useSetForm