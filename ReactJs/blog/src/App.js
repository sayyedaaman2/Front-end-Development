
import React from 'react'
class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      counter : 0
    };

  }
  render() {
    return (
      <div id='App'>
        <h1>Hello World</h1>
        <h1>Count : {this.state.counter}</h1>
        <button onClick={()=>this.setState({'counter' : this.state.counter+1})}>clickMe</button>
      </div>
    )
  }
}

export default App;