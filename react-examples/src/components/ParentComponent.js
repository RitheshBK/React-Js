import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

export default function ParentComponent(){
    const [childData, setChildData] = useState('');
    // callback function to receive data from child component
    const handleDatafromChild = (data) => {
        setChildData(data)
    }

    return (
        <div>
            <h1>Data from child is {childData}</h1>
            <ChildComponent sendDatatoParent={handleDatafromChild}/>
        </div>
    )
}