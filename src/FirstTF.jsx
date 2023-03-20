import React from 'react'

const FirstTF = ({handleFirstNumChange}) => {
  return (
    <div className='main'>
        <label htmlFor='first'>First Input</label>
        <input id='first' type='text' onChange={handleFirstNumChange}/>
    </div>
  )
}

export default FirstTF