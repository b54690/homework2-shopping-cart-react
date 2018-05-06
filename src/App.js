import React, { Component } from 'react';
import Cart from './container/Cart';
import CheckoutButton from './components/CheckoutButton'
import LiveClock from './components/LiveClock'
import './App.css';

const products = [
  { id: 1, name: "Prada Shoes", price: 570, quantity: 0 },
  { id: 2, name: "Rolex Watch", price: 649, quantity: 0 },
  { id: 3, name: "Paper clips", price: 0.1, quantity: 0 }
]

class App extends Component {
  state = { products }

  incrementQuantity = (id, quantity, onClick) => {
    this.setState.onClick(id)({ quantity: quantity + 1})
  }

  totalValue = (id, price, quantity) => {
    this.setState.onc(id)({ price: price * quantity})
  }


  render() {
    return (
      <div className="App">
        <h1 className="App-title">Shopping Cart App</h1>
        <LiveClock />
        <Cart
          products={this.state.products}
          incrementQuantity={this.incrementQuantity}
        />
        <CheckoutButton
          totalValue={this.totalValue}
        />
        Total Value:
      </div>
    )
  }
}

export default App;
