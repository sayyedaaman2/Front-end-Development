import './App.css';
import {Fragment} from "react"
import User from './User'
function App() {
  function parentAlert(data){
    alert(data)
  }
  return (
    <div className='App'>
      <User alert={parentAlert}/>
    </div>
  )
}

export default App;
