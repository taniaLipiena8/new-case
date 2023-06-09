import React, { useEffect } from 'react'
import FirstTF from './FirstTF'
import SecondTF from './SecondTF'
import Textfield from './Textfield'
import ViewText from './ViewText'
import { useState } from "react";
const Parent = () => {
    const [text, setText] = useState(0)
    const [firstNum, setFirstNum] = useState(0)
    const [secondNum, setSecondNum] = useState(0)

    const onValueChange = (num) => setText(num)

    const onFirstNumChanged = e => { setFirstNum(e.target.value) }
    const onSecondNumChanged = e => setSecondNum(e.target.value)

    useEffect(() => {
        let test = Number(firstNum) + Number(secondNum)
        setText(test)
    },[firstNum,secondNum])

    return (
        <div className='main'>
            <Textfield label='First' value={firstNum} handlechange={onFirstNumChanged} />
            <Textfield label='Second' value={secondNum} handlechange={onSecondNumChanged} />
            <ViewText text={text} />
        </div>
    )
}

export default Parent