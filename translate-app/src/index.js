import React from 'react'
import  ReactDOM  from 'react-dom/client'
import App from './App';

// 1)  import react and react dom libraries

// 2)  Get a reference to the div with ID root

// 3 ) Tell React to take the control of the element

// 4 ) Show the component on the screen


const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);


root.render(<App/>)



