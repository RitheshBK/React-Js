import { useCallback, useState } from "react";
import Todos from "./Todos";

export default function UseCallbackhook(){
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const incr = () => {
        setCount(count + 1);
    }

    const addTodo = useCallback(() => {
        console.log(todos);
        setTodos([...todos, "New Todo"])
    },[todos]);

    return (
        <>
            <Todos todos={todos} addTodo={addTodo}/>
            <div>
                <div>count is {count}</div>
                <button onClick={incr}>+</button>
            </div>
        </>
    );
}