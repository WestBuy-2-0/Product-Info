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
      selectedProduct: '',
      skuPrefix: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSkuPrefix = this.handleSkuPrefix.bind(this);
  }
  
  componentDidMount() {
    //be sure to comment out below
    // this call will go away in the final production build
    // axios.post('http://18.191.11.202:5000/getSingleProduct', {
    //   // this.state.searchItem
    //   selectedItemId: '12-005'
    // })
    // .then((response) => {
    //   if (response.data.length > 0) {
    //     this.setState({selectedProduct: response.data[0]})
    //   } else {
    //     this.setState({selectedProduct: 404})
    //   }
    //   this.handleSkuPrefix()

    //   console.log(response.data[0])
    // })
    // .catch((error) => {
    //   console.log(error);
    // })
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

  handleSkuPrefix() {
    let skuPrefix = this.state.selectedProduct.sku.split("-")[0];

    this.setState({
      skuPrefix
    })
  }

  render() {
    // all the code below will go away in the final production build
    let selectItemForm;
    let selectedItem;

    if (this.state.selectedProduct === '') {
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
    }
    return (
      <div className="App">
        {/* the div below names header will go away in the final production build */}
        <div className="Header">
          {selectItemForm}
          <hr></hr>
        </div>


        <Product selectedProductProp={this.state.selectedProduct} selectedProductSkuProp={this.state.skuPrefix} />
      </div>
    );
  }
}

  
  export default App;