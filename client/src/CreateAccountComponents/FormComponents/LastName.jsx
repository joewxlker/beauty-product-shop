import { useCallback } from "react"

const LastNameForm = ({ lastname, onLastNameChange }) => {
    
    const handleChange = useCallback((event) => {
      onLastNameChange(event)
    })
    return (
      <span>
        <input className='createform-input' placeholder="last name..." name='lastname' value={lastname} onChange={handleChange} />
      </span>
    )
  }

export default LastNameForm