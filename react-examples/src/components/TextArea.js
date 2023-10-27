import { useState } from "react";

const TextArea = () => {
    const [textarea, setTextArea] = useState([]);

    const changeVal = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        let array = [name => value];
        setTextArea({...textarea, array});
    }

    const formSubmit = (event) => {
        event.preventDefault();
        console.log(textarea);
       
    }

    return (
        <form onSubmit={formSubmit}>
            <textarea name="textareaval" value={textarea.value || "Enter the value"} onChange={changeVal}></textarea>
            <button type="submit">Submit</button>
        </form>
    );
}

export default TextArea;