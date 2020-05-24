import React from 'react';
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css'; 

import {fetchProducts} from './actions/appActions';
// import appActions from './actions/appActions'

import ProductList from './ProductList';
import Cart from './Cart';

import './App.css';

//
// use life cycle methods
//
class App extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  // addToCart(){

  // }

  
  render() {
  

    return (
      <div className="App">
        {/* <header className="text-center">Kabra Shopping Mart</header> */}
        <h1 className="text-center border-dark">Kabra Shopping Mart</h1>
        <div className="container">
          <div className="application row container d-flex p-4 ">
            <ProductList products ={this.props.products} />
            <Cart />      
          </div>
        </div>
      </div>
    );
  }
}



const mapDispatchToProps = {
  fetchProducts
};

const mapStateToProps = (state) => {
  return {products:state.products}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

