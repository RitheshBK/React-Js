import React, { useContext } from 'react'
import { Num } from './App';

function Minus(){
    const funmin = useContext(Num);
    function setFunmin(){
        funmin.minus();
    }
    return (
        <>
         <button onClick={setFunmin}> - </button>
        </>
    );
}

export default Minus;