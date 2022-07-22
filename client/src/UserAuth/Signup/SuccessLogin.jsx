import { Link } from "react-router-dom";
import HandleLogin from "../Login/HandleLogin";

function SuccessLogin({setLoggedIn}) {
    return ( 
        <div>
            <h1>create account successful</h1>

            <h1>create account successful</h1>
            <h3>You may now login</h3>
            we have sent an email to email. Please verify to stay in the loop
            <HandleLogin setLoggedIn={setLoggedIn}/>

            
            <Link to='/'>You can use this link to continue shopping</Link>
        </div>
     );
}

export default SuccessLogin;