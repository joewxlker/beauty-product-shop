import { Link } from "react-router-dom";
import HandleLogin from "../Login/HandleLogin";
import '../Authentication.css'

function SuccessLogin({setLoggedIn}) {
    return ( 
        <div className='successlogin-main'>
            <div className='handle-login-success-container'>
            <h1>Account has been created successfully</h1>
            <h3>You may now login</h3>
            we have sent an email to email. Please verify to stay in the loop
            <HandleLogin setLoggedIn={setLoggedIn}/>

            </div>
        </div>
     );
}

export default SuccessLogin;