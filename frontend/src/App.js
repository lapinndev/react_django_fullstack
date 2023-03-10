import './App.css';
import axios from 'axios';
import React from 'react';

class App extends React.Component{
  state = { details: [],}

  componentDidMount(){
    let data;
    axios.get('http://127.0.0.1:8000/')
    .then(res => {
      data = res.data;
      this.setState({
        details: data
      });
    })
  }
  render() {
    return (
      <div>
        <header>Данные из Django</header>
        <hr></hr>
        {this.state.details.map((output, id) => (
          <div key={id}>
            <div>
              <h2>{output.title}</h2>
              <p>{output.channel}</p>
            </div>
          </div>
          ))}
      </div>
    )
  }
}

export default App;
