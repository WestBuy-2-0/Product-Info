import React from "react";
import "./App.css";
import axios from "axios";
const url = require("url");
import Product from "./components/Product";
import moment from "moment";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchItem: "",
      selectedProduct: "",
      options: [],
      skuPrefix: "",
      timeForDelivery: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSkuPrefix = this.handleSkuPrefix.bind(this);
    this.dateMaker = this.dateMaker.bind(this);
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
        // selectedItemId
        selectedItemId: 18
      })
      .then(response => {
        if (response.data.length > 0) {
          this.setState({ selectedProduct: response.data[0] });
        } else {
          this.setState({ selectedProduct: 404 });
        }

        const options = JSON.parse(response.data[0].options);
        this.setState({
          options
        });

        this.dateMaker();
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

  dateMaker() {
    moment.relativeTimeThreshold("ss", 0);
    moment.relativeTimeThreshold("m", 60);
    moment.relativeTimeThreshold("h", 24);
    let date = moment()
      .add(2, "days")
      .format("dddd, MMM Do");
    this.setState({
      timeForDelivery: date
    });
  }

  render() {
    return (
      <div className="App">
        <Product
          selectedProductProp={this.state.selectedProduct}
          selectedProductSkuProp={this.state.skuPrefix}
          selectedProductOptions={this.state.options}
          selectedProductTime={this.state.timeForDelivery}
        />
      </div>
    );
  }
}

export default App;
