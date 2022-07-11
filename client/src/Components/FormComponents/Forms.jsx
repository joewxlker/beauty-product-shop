import { useCallback, useState } from "react"
import ErrorMessage from './ErrorMessage.jsx'

const Forms = ({ formType, onFormChange, value, onTypeChange, error }) => {
      
  const handleChange = useCallback((event) => {
    onTypeChange(formType)
    onFormChange(event)
  }, [])
  
  return (
    <>
    <input className='createform-input' placeholder={formType} name={formType} value={value[formType]} onChange={handleChange} />
      {error[formType] && <ErrorMessage formType={formType} />}
    </>
  )
}
export default Forms
