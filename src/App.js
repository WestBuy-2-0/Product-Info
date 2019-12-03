import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }
  
  componentDidMount() {
      // Call our fetch function below once the component mounts
    axios.get('http://localhost:5000/getAllProducts')
    .then((res) => {
      this.setState({ data: res.data })
      console.log(this.state.data);
    })
    .catch((err) => {
      console.log(err)
    });
  }
    // Fetches our GET route from the Express server. 
    // (Note the route we are fetching matches the GET route from server.js

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
  }
  
  export default App;