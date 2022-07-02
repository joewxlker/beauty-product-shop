import { useCallback } from "react"
import ErrorMessage from './ErrorMessage.jsx'

const Forms = ({ formType, onFormChange, value, onTypeChange, error }) => {
      
  const handleChange = useCallback((event) => {
    event.preventDefault()
    onTypeChange(formType)
    onFormChange(formType,event)
  }, [])

  if(value === undefined) return



  return (
    <>
    <input className='createform-input' placeholder={formType} name={formType} value={value.formType} onChange={handleChange} />
      {error[formType] && <ErrorMessage formType={formType} />}
    </>
  )
}
export default Forms
