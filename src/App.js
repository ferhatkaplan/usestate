import react,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const[count,setCount]=useState(4)
  function incrase(){
    setCount(oldvalue=> oldvalue+1)
    setCount(oldvalue=> oldvalue+1)
  }
  function descrase(){
    setCount(oldvalue=> oldvalue-1)
    setCount(oldvalue=> oldvalue-1)
  }
  
  return (
    <div>
   <button onClick={descrase}>-</button>
   <span>{count}</span>
   <button onClick={incrase}>+</button>
   </div>
  );
}

export default App;
