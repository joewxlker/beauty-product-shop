import { useState } from "react";

const useSetBool = () => {
    const [bool, setBool] = useState({});

    return [bool, (type,props)=> { setBool({ ...bool, [type]: props })}]
}

export default useSetBool