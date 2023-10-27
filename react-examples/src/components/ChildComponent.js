import React, { useState } from "react";

export default function ChildComponent(props){
    
    const [setData, setChildData] = useState('')

    const changeChildData = (e) => {
        setChildData(e.target.value)
    }

    const sendDatatoParent = () => {
        props.sendDatatoParent(setData)
    }

    return (
        <div>
            <input type="text" value={setData} onChange={changeChildData} />
            <button onClick={sendDatatoParent}>Send Data to Parent</button>
        </div>
    )
}