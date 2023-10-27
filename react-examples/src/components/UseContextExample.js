import React, { useState } from "react";

const Component1 = () => {
    const [name, setName] = useState('Rithesh BK');
    return (
        <div><Component2 name= {name}/></div>
    );
}

const Component2 = (props) => {
    console.log(props);
    return (
        <div><Component3 name={props.name}/></div>
    );
}

const Component3 = (props) => {
    return (
        <div><Component4 name={props.name}/></div>
    );
}

const Component4 = (props) => {
    return (
        <div>{props.name}</div>
    );
}

export default Component1;