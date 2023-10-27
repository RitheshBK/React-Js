import { useState } from "react";
import AnimalShow from "./components/AnimalShow";

function App(){
    //const [animalClick, setanimalClick] = useState(0);
    const [count, setCount] = useState(0);

    const handleClick = () => {
        //console.log('Button was clicked !')
        setCount(count + 1);
    }

    return (
        <div>
            <button onClick={handleClick}>Add Animal</button>
            <div>Number of animals : {count}</div>
        </div>
    );
}

export default App;