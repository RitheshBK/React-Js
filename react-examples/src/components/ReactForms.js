import { useState } from "react";

export default function ReactForms(){

    const [input, setInput] = useState([]);
    
    const onchangeVal = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput({...input, [name]: value});
    }
    const formSubmit =  (event) => {
        event.preventDefault();
        console.log(input);
    }

    return (
        <form onSubmit={formSubmit}>
            <label>Enter the Name</label>
            <input type="text" name="name" value={input.name || ""} onChange={onchangeVal}/> <br/>
            <label>Enter the Age</label>
            <input type="text" name="age" value={input.age || ""} onChange={onchangeVal} /> <br/>
            <button type="submit">Submit</button>         
        </form>
    );
}