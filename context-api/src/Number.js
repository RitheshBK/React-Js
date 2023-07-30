import React, { useContext } from 'react'
import { Num } from './App'

function Number(){
    const number = useContext(Num)
    return <h1>{ number.value }</h1>
}

export default Number