import React from 'react';
import {connect} from 'react-redux';

import {fetchProducts} from './actions/appActions';

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
    
    const types = new Set()
    this.props.products.forEach(({type}) => types.add(type))

    return (
      <div className="App">
        <h1>i'm Home component</h1>
        <select className= "drop-down">
          {Array.from(types).map((type) => <option  className="options" value = {type}>{type}</option>)}
        </select>
        <div>
          <ul>
            {this.props.products.map((product)=> 
              <li>
                <div className = 'text-box'>
                  <div className= "title text"><strong>{product.title}</strong></div><br />
                  <div className = "description text">{product.description}</div>
                  <div className = "price text">Unit Price = {product.price}</div>
                  <div className="rating text">Rating: {product.rating}</div>
                </div>
                {/* onClick = {this.props.addToCart()} */}
                <button >Add me</button>
                <br/>
                <img src={product.filename}  width="200" height="200" alt="eatables"/>
              </li>)
            }
          </ul>
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

