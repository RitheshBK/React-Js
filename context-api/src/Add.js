import React, { useContext } from 'react'
import { Num } from './App'

function Add(){
    const funadd = useContext(Num);
   // console.log(funadd);
    function setFunadd(){
        funadd.plus();
    }
    return (
        <>
            <button onClick={setFunadd}> + </button>
        </>
    )
}

export default Add