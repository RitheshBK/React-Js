import React, { useEffect, useState } from "react";

export default function UseEffectSecondExample(){
    const [count,setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
    
    useEffect( () => {

        setCalculation(count * 2)          
    });
    function calculateTotal(){
        console.log(count);
        setCount((count) => count + 1);
    }

    return (
        <>
       <div>Count is {count}</div><br/>
       <div>Total calculation is {calculation}</div>
       <button type="button" onClick={calculateTotal}>Click Check</button>
       </>

    );
}