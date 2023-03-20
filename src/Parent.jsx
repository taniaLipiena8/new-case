import React, { useEffect } from 'react'
import FirstTF from './FirstTF'
import SecondTF from './SecondTF'
import ViewText from './ViewText'
import { useState } from "react";
const Parent = () => {
    const [text, setText] = useState(0)
    const [firstNum, setFirstNum] = useState(0)
    const [secondNum, setSecondNum] = useState(0)

    const onButtonPressed = (num) => setText(num)

    const onFirstNumChanged = e => { setFirstNum(e.target.value) }
    const onSecondNumChanged = e => setSecondNum(e.target.value)

    return (
        <div className='main'>
            <FirstTF handleFirstNumChange={onFirstNumChanged} />
            <SecondTF handleSecondNumChange={onSecondNumChanged} />
            <ViewText text={text} secondNum={secondNum} firstNum={firstNum} onButtonPressed={onButtonPressed} />
        </div>
    )
}

export default Parent