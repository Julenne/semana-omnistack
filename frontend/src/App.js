import React from 'react';
import Logon from './pages/Logon';

import './global.css'
//JSX(Javascript + HTML)
function App() {
  
  return (
    <Logon/>
      );
}

export default App;

/**
 * exemplo -->>  let counter = useState(0);
   * o useState retorna um array de duas posições onde:
   * [valor,funcaoDeAtualizacao]
   * logo:
   *  
   * let [counter,setCounter] = useState(0);
  
    function increment(){
      setCounter(counter + 1) // counter += 1;
      console.log(counter)
    }
   */