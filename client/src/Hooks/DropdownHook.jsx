import { useState } from "react";

const useSetDropDownState = () => {
    const [open, setOpen] = useState(false);

    return [open, setOpen]
}

export default useSetDropDownState