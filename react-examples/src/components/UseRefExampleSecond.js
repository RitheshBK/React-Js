import { useRef } from "react";

export default function UseRefExampleSecond(){
    const inputElement = useRef();

    const focusInput = () => {
        //console.log(inputElement.current.type);
        inputElement.current.focus();
    }

    return(
        <>
            <input type="text" id="testId" ref={inputElement} />
            <button type="button" onClick={focusInput}>Focus Input</button>
        </>
    )
}

