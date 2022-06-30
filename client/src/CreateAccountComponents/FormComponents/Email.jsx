import { useCallback } from "react"

const EmailForm = ({ email, onEmailChange }) => {

    const handleChange = useCallback((event) => {
        onEmailChange(event)
    })
    return (
        <span>
        <input className='createform-input' placeholder="email..." name='email' value={email} onChange={handleChange} />
        </span>
    )
}
      
export default EmailForm