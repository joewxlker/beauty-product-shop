import { useCallback } from "react"

const FirstNameForm = ({ firstname, onFirstNameChange }) => {
      
  const handleChange = useCallback((event) => {
    onFirstNameChange(event)
  })
  return (
    <span>
      <input className='createform-input' placeholder="first name..." name='firstname' value={firstname} onChange={handleChange} />
    </span>
  )
}

export default FirstNameForm