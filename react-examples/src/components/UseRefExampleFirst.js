import React, {useEffect, useState, useRef} from "react";

const UseRefExampleFirst = () => {
    const [inputVal, setVal] = useState("");
    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
        //console.log(count.current)
    })

    const setInputVal = (e) => {
        setVal(e.target.value);
    }
    
    return (
        <>
            <input type="text" val={inputVal} onChange={setInputVal} />
            <h1>Render Count : {count.current}</h1>
        </>
    )

}

export default UseRefExampleFirst;