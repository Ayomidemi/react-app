import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
    //Executes when the component is mounted
  constructor(props) {
    //console.log("constructor - ShoppingCart");
    super(props); //calling super class's constructor

    //initialization of the state
    this.state = {
        products: [
            {id: 1,productName: "iPhone", price:8900, quantity:0},
            {id: 2,productName: "Nokia", price:4000, quantity:0},
            {id: 3,productName: "Blackberry", price:8670, quantity:0},
            {id: 4,productName: "Visaphone", price:7540, quantity:0},
            {id: 5,productName: "Dell Printer", price:6900, quantity:0},
            {id: 6,productName: "Sony Camera", price:4002, quantity:0},
        ]
    };
  }

    render () {
         //console.log("render - ShoppingCart");

        return <div>
            <h3>Shopping Cart</h3>

        <div className="row">
            {this.state.products.map((prod) => {
                return <Product key={prod.id} product={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete} >
                    <button className="btn btn-primary">Buy Now</button>
                </Product>;
            })}
        </div>
        </div>
    };
    // render method ends here

    
    //executes when the user clicks on + button.
  handleIncrement = (product, maxValue) => {
    //get index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;

      //update the state of current component (parent component)
      this.setState({ products: allProducts });
    }
  };

  //executes when the user clicks on - button.
  handleDecrement = (product, minValue) => {
    //get index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;

      //update the state of current component (parent component)
      this.setState({ products: allProducts });
    }
  };

  //executes when the user clicks on Delete (X) button in the Product component.
  handleDelete = (product) => {
    //get index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (window.confirm("Are you sure to delete?")) {
      //delete product based on index
      allProducts.splice(index, 1);

      //update the state of current component (parent component)
      this.setState({ products: allProducts });
    }
  };
}
