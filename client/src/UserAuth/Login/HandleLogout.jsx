import { useCallback } from "react";
import { getLocalData, setLocalData } from "../../Services/handleLocalData";

function HandleLogout({setLoggedIn, loggedStatus}) {

    const handleLogout = useCallback (async() => {
        setLocalData('userInfo', null)
        setLoggedIn(false);
        console.log(await getLocalData('userInfo'), loggedStatus)
    })

    return ( 
        <button onClick={handleLogout}>Logout</button>
     );
}

export default HandleLogout;