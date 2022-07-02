import { useCallback } from "react"

const Forms = ({ formType, onFormChange}) => {
      
  const handleChange = useCallback((event) => {
    onFormChange(event)
  }, [])

  return (
    <span>
      <input className='createform-input' placeholder={`${formType}`} name={`${formType}`} value={`${formType}`} onChange={handleChange}/>
    </span>
  )
}

export default Forms