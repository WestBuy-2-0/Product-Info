import React from "react";
import "./App.css";
import axios from "axios";
const url = require("url");
import Product from "./components/Product";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchItem: "",
      selectedProduct: "",
      skuPrefix: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSkuPrefix = this.handleSkuPrefix.bind(this);
  }
  /* Reads current pages URL and gets product id */
  getProductID() {
    let productUrl = window.location.href;
    let { pathname } = new URL(productUrl);
    return pathname.split("/")[2];
  }

  componentDidMount() {
    let selectedItemId = this.getProductID();

    axios
      .post("http://18.191.236.232:5000/getSingleProduct", {
        selectedItemId: 77
        // selectedItemId
      })
      .then(response => {
        if (response.data.length > 0) {
          this.setState({ selectedProduct: response.data[0] });
        } else {
          this.setState({ selectedProduct: 404 });
        }
        // this.handleSkuPrefix();
        // console.log(response.data[0]);
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSkuPrefix() {
    let skuPrefix = this.state.selectedProduct.sku.split("-")[0];
    this.setState({
      skuPrefix
    });
  }

  render() {
    return (
      <div className="App">
        <Product
          selectedProductProp={this.state.selectedProduct}
          selectedProductSkuProp={this.state.skuPrefix}
        />
      </div>
    );
  }
}

export default App;
