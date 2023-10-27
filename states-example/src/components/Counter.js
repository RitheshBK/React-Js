import React, { useState } from "react"


export default function Counter(){
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <span>clicked value { count } </span><br/>
            <button type="button" onClick={incrementCount}>Add click</button> 
        </div>
    )
}