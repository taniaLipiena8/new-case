import React, { useEffect } from 'react'

const ViewText = ({ text, secondNum, firstNum, onButtonPressed }) => {

    let test = 0
    if (firstNum && secondNum) {
        test = Number(firstNum) + Number(secondNum)
    } else if (firstNum && !(secondNum)) {
        test = Number(firstNum)
    } else {
        test = Number(secondNum)
    }


    return (

        <div>
            {test}
            {/* <button onClick={()=>onButtonPressed(test)}>test</button> */}
        </div>
    )
}

export default ViewText