import React from 'react'

const SecondTF = ({handleSecondNumChange}) => {
  return (
    <div>
        <label htmlFor='second'>Second Input</label>
        <input id='second' type='text' onChange={handleSecondNumChange}/>
    </div>
  )
}

export default SecondTF