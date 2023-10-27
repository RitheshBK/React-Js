import { useState, useEffect, useRef } from "react";

function UseRefExampleThird(){
    const [inputVal, setInputVal] = useState("");
    const prevVal = useRef("");
    function setIpVal(e){
        console.log("setIpVal", e.target.value);
        setInputVal(e.target.value);
    }

    useEffect(() => {
        //console.log("inputVal",inputVal);
       console.log("prevVal.current", prevVal.current);
       prevVal.current = inputVal;
    },[inputVal])

    return (
        <>
            <input type="text" value={inputVal} onChange={setIpVal} />
            <p>Current Value : {inputVal}</p>
            <p>Previous Value : {prevVal.current}</p>
        </>
    );
}

export default UseRefExampleThird;