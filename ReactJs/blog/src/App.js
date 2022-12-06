import './App.css';
import React from "react";

function App() {

  function submitForm(e){
    e.preventDefault();
    
  }
  return (
    <div className='App'>
      <h1>Uncontroller in react</h1>
      <form onSubmit={submitForm}>

        <input type='text' /><br /> <br />
        <input type='text' /><br /> <br />
        <button>Submit</button>
      </form>
    </div>
  )
}
export default App;
