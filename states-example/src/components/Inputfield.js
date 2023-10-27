import { useState } from "react"

export default function Inputfield(){

    const [textval, setTextvalue] = useState('');

    const changeTextvalue = (e) => {
        setTextvalue(e.target.value)
    }

    return (
        <div>
            <h1>Input value { textval }</h1>
            <input type="text" onChange={changeTextvalue}/>
        </div>
    )
}