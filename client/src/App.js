import React from 'react';
import './App.css';
import axios from 'axios';
import Product from './components/Product'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      searchItem: '',
      selectedProduct: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  componentDidMount() {
    //be sure to comment out below
    axios.post('http://18.191.11.202:5000/getSingleProduct', {
      // this.state.searchItem
      selectedItemId: '12-005'
    })
    .then((response) => {
      if (response.data.length > 0) {
        this.setState({selectedProduct: response.data[0]})
      } else {
        this.setState({selectedProduct: 404})
      }

      console.log(response.data[0])
    })
    .catch((error) => {
      console.log(error);
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    axios.post('http://18.191.11.202:5000/getSingleProduct', {
      selectedItemId: this.state.searchItem
    })
    .then((response) => {
      if (response.data.length > 0) {
        this.setState({selectedProduct: response.data[0]})
      } else {
        this.setState({selectedProduct: 404})
      }
    })
    .catch((error) => {
      console.log(error);
    })

  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <Product selectedProductProp={this.state.selectedProduct} />
      </div>
    );
  }
}

  
  export default App;