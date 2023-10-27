//import UseEffectSecondExample from "./components/UseEffectSecondExample";

//import Component1 from "./components/UseContextExample";

//import  UseEffectExample  from './components/UseEffectExample';

//import UseCallbackhook from "./components/UseCallbackhook";

//import CustomHooks from "./components/CustomHooks";

//import UseRefExampleFirst from "./components/UseRefExampleFirst";

//import UseRefExampleSecond from "./components/UseRefExampleSecond";

//import UseRefExampleThird from "./components/UseRefExampleThird";

//import ReactForms from "./components/ReactForms";

//import TextArea from "./components/TextArea";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout  from './pages/Layout';
import Home from './pages/Home';

function App() {
  return (
   <BrowserRouter>
     <Routes>
        <Route path="/" element={Layout}>
          <Route index element={Home}>Home</Route>
        </Route>
        
     </Routes>
   </BrowserRouter>
  );
}

export default App;
