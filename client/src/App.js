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
      selectedProduct: undefined
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  componentDidMount() {

  }

  handleSubmit(event) {
    event.preventDefault();

    // axios.post('http://3.15.215.226:5000/getSingleProduct', {
    //   selectedItemId: this.state.searchItem
    // })
    // .then((response) => {
    //   console.log(response.data.length);
    //   if (response.data.length > 0) {
    //     this.setState({selectedProduct: response.data[0]})
    //   } else {
    //     this.setState({selectedProduct: 404})
    //   }
    //   console.log(this.state.selectedProduct);
    // })
    // .catch((error) => {
    //   console.log(error);
    // })

    axios.post('http://localhost:5000/getSingleProduct', {
      selectedItemId: this.state.searchItem
    })
    .then((response) => {
      console.log(response.data.length);
      if (response.data.length > 0) {
        this.setState({selectedProduct: response.data[0]})
      } else {
        this.setState({selectedProduct: 404})
      }
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

    if (this.state.selectedProduct === undefined) {
      selectItemForm =  <form onSubmit={this.handleSubmit}>
                            <h3>Item Search</h3>
                            <input id="search-item" name="searchItem" onChange={this.handleChange} />
                            <button>Find Item</button>
                          </form>
      selectedItem = undefined;

    } else if (this.state.selectedProduct === 404) {
      selectItemForm =  <form onSubmit={this.handleSubmit}>
                            <h3>Item Search</h3>
                            <input id="search-item" name="searchItem" onChange={this.handleChange} />
                            <button>Find Item</button>
                          </form>
      selectedItem = <div>
                        <p>Error 400</p>
                        <p>Item Not Found</p>
                    </div>;

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
        <div className="Header">
          {selectItemForm}
          <p>+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++</p>
        </div>
        {selectedItem}
      </div>
    );
  }
}

  
  export default App;