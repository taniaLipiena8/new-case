import React from 'react'

const Textfield = ({label, value, handlechange}) => {
  return (
    <div className='main'>
        <label htmlFor={label}>{label} Input</label>
        <input id={label} value={value} type='number' onChange={handlechange}/>
    </div>
  )
}

export default Textfield