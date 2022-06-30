import { useCallback } from "react"

export const PasswordFormOne = ({ value, onPasswordChange, passwordMatch }) => {
    
    const handleFormChange = useCallback((event) => {
        onPasswordChange(event)
    })

    return (
        <>
            {passwordMatch ? (
                                    
                <div className='password-container'>
                    <span>
                        <input className='createform-input' placeholder="password..." type='password' name='password' value={value} onChange={handleFormChange} />
                    </span>
                    </div>
            ) : (
                <div className='password-container'>
                    <span>
                            <input className='createform-input' placeholder="password..." type='password' name='password' value={value} onChange={handleFormChange} />
                            <p>Passwords do not match</p>
                    </span>
                </div>
            )
            }
        </>
    )
}

export const PasswordFormTwo = (props) => {

    const { value, onPasswordChange, passwordMatch } = props
    
    const handleFormChange = useCallback((event) => {
        onPasswordChange(event)
    })

    return (
        <>
            {passwordMatch ? (
                                    
                <div className='password-container'>
                    <span>
                        <input className='createform-input' placeholder="password..." type='password' name='passwordTwo' value={value} onChange={handleFormChange} />
                    </span>
                    </div>
            ) : (
                <div className='password-container'>
                    <span>
                            <input className='createform-input' placeholder="password..." type='password' name='passwordTwo' value={value} onChange={handleFormChange} />
                            <p>Passwords do not match</p>
                    </span>
                </div>
            )
            }
        </>
    )
}