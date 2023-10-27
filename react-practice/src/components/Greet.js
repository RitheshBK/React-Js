import React from "react";


// function Greet(){
//     return(
//         <h2> Hello Rithesh </h2>
//     )
// }

export const Greet = (props) => {
    console.log(props);
    return (<h2> Hello {props.name} - {props.heroName}a.aka.{props.children}</h2>)
}