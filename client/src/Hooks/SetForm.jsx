import { useState } from "react";

const useSetForm = () => {
    const [value, setForm] = useState({});
    return [value, (event) => {
        setForm((oldValue) => {
          return { ...oldValue, [event.target.name]: event.target.value };
        });
      },
    ];
  };
  
  export default useSetForm;