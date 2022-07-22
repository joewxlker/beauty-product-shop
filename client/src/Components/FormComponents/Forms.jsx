import { useCallback, useState } from "react"
import ErrorMessage from './ErrorMessage.jsx'

const Forms = ({ formType, onFormChange, value, onTypeChange, error, origin }) => {
      
  const handleChange = useCallback((event) => {
    onTypeChange(formType)
    onFormChange(event)
  }, [])
  
  return (
    <>
      <input
        name="honeypot"
        style={{ opacity: '0%', cursor: 'default', height: '1px', width: '1px' }}
        tabindex="-1"
        autocomplete="off"
        value={value['honeypot']}
        onChange={handleChange} />
       <input className='createform-input' placeholder={formType} name={formType} value={value[formType]} onChange={handleChange} />
      {error[formType] && <ErrorMessage formType={formType} />}
    </>
  )
}
export default Forms
