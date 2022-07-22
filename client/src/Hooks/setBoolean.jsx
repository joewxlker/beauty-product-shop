import { useState } from "react";

const useSetBool = () => {
    const [bool, setBool] = useState({'sidebar': false});

    return [bool, (type, props) => { setBool({ ...bool, [type]: props })}]
}

export default useSetBool