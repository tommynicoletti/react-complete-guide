import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  //    personsState = array stato , setPersonsState = funzione che ci permette d settare lo stato
  // Per capirlo meglio: 
  // const [ state, setState] = useState({
  
  const [ personsState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 }
    ],
  });
  // valuta di l'utilizzo multiplo di useState per ogni cosa evitando 
  // l'automerge che non c'è
  const [otherState, steOtherState] = useState('some other value');

  console.log(personsState, otherState);
  // Con l'utilizzo degli hook con useState-setState (setPersonsState nell'esempio)
  // non c'è il merge automatico degli elementi dello stato

  const switchNameHandler = () => {
    // DON'T USE 'this' KEYWORD
    setPersonsState({
      persons: [
        { name: "Maximilian", age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 27 }
      ]
    });
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working</p>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  )

}

export default App;