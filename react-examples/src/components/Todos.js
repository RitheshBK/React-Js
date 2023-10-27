
import { memo } from "react";


const Todos = ({todos,addTodo}) =>  {
    console.log("child render");
    return (
        <>
            <h2>My Todos</h2>
            {todos && todos.map( (todo, index) => {
               return <p key={index}>{todo}</p>
            })}
             <button type="button" onClick={addTodo}>Add Todo</button>
        </>
    );
}

export default memo(Todos);