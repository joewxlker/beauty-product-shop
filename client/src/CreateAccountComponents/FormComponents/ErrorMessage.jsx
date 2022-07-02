const ErrorMessage = ({ formType }) => {


    if (formType === 'firstname') {
        return (
            <>
                <p>Names cant contain special characters</p>
            </>
        )
    };
    if (formType === 'lastname') {
        return (
            <>
                <p>Names cant contain special characters</p>
            </>
        )
    };
    if (formType === 'email') {
        return (
            <>
                <p>Please enter a valid email address</p>
            </>
        )
    };
    if (formType === 'password') {
        return (
            <>
                <p>Passwords must include a capital letter and any special character, and can't be less than 8 characters in length</p>
            </>
        )
    };
}
  
export default ErrorMessage