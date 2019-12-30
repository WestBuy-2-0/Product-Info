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
      timeForDelivery: "",
      ponyDelivery: "",
      railDelivery: ""
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
      .post("http://18.191.236.232:5000/mongo_get", {
        selectedItemId
        // selectedItemId: 85
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

    let timeForDelivery = moment()
      .add(7, "days")
      .format("dddd, MMM Do");

    let ponyDelivery = moment()
      .add(10, "days")
      .format("dddd, MMM Do");

    let railDelivery = moment()
      .add(14, "days")
      .format("dddd, MMM Do");

    this.setState({
      timeForDelivery,
      ponyDelivery,
      railDelivery
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
          selectedProductPonyTime={this.state.ponyDelivery}
          selectedProductRailTime={this.state.railDelivery}
        />
      </div>
    );
  }
}

export default App;
