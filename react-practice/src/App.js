import logo from './logo.svg';
import './App.css';
import { Greet, Greet1 } from './components/Greet';
import WelcomeClass from './components/WelcomeClass';
import Hello from './components/Hello';

function App() {
  function testCheck(){
    alert(1);
  }
  return (
    <div className="App">
       <Greet name="Rithesh" heroName="Check Rithesh">
         <p>This is paragraph tag as the children Component</p>
       </Greet>
       <Greet name="Mahesh" heroName="Check Mahesh">
        <button onClick={testCheck}>Action</button>
       </Greet>
       <Greet name="Test Me" heroName="Check Test Me"/>
    </div>
  );
}

export default App;
