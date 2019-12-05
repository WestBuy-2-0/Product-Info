import React from 'react';
import './App.css';
import axios from 'axios';
import Product from './components/product'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      searchItem: '',
      selectedProduct: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  componentDidMount() {
    // axios.get('http://localhost:5000/getAllProducts')
    // .then((res) => {
    //   this.setState({ data: res.data })
    //   // console.log(this.state.data);
    // })
    // .catch((err) => {
    //   console.log(err)
    // });
  }

  handleSubmit(event) {
    event.preventDefault();

    // axios.post('http://localhost:5000/getSingleProduct', {
    //   selectedItemId: this.state.searchItem
    // })
    // .then((response) => {
    //   this.setState({selectedProduct: response.data[0]})
    //   console.log(this.state.selectedProduct);
    // })
    // .catch((error) => {
    //   console.log(error);
    // })

    axios.post('http://http://172.31.32.62:5000/test', {
      selectedItemId: this.state.searchItem
    })
    .then((response) => {
      this.setState({selectedProduct: response.data[0]})
      console.log(this.state.selectedProduct);
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
    let selectItemForm;
    let selectedItem;

    if (this.state.selectedProduct.length === 0) {
      selectItemForm =  <form onSubmit={this.handleSubmit}>
                            <h3>Item Search</h3>
                            <input id="search-item" name="searchItem" onChange={this.handleChange} />
                            <button>Find Item</button>
                          </form>
      selectedItem = undefined;
    } else {
      selectItemForm =  <form onSubmit={this.handleSubmit}>
                            <h3>Item Search</h3>
                            <input id="search-item" name="searchItem" onChange={this.handleChange} />
                            <button>Find Item</button>
                          </form>
      selectedItem = <Product selectedProductProp={this.state.selectedProduct} />
    }

    return (
      <div className="App">
        {selectItemForm}
        {selectedItem}
      </div>
    );
  }
}

  
  export default App;