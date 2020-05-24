import React from 'react';
import { connect } from 'react-redux';
import  { selectType, addToCart } from './actions/appActions'

class ProductList extends React.Component{
    
    render() {
        const types = new Set()
        this.props.products.forEach(({type}) => types.add(type));
        
        return (
            <div className="productList col border border-dark justify-content-center">
                        <div className="d-flex justify-content-center">
                        <select onChange={event => {this.props.selectType(event.target.value)}} className= "drop-down ">
                            {Array.from(types).map((type) => <option className="options" value = {type}>{type}</option>)}
                        </select>
                        </div>
                        <div>
                            <ul>
                                {this.props.products.filter((product) => this.props.type===product.type).map((product)=> 
                                    <div className="d-flex justify-content-start mt-3 media">
                                    <img class="align-self-start mr-3" src={product.filename}  width="200" height="200" alt="eatables"/>
                                    <div className="">
                                        <div className=""><strong>{product.title}</strong></div>
                                        <div className="mb-2">{product.description}</div>
                                        <div className="mt-3">Unit Price = {product.price}</div>
                                        <div className="">Rating: {product.rating}</div>
                                        <button onClick={() => {
                                            this.props.addToCart(product);
                                        }}>Add me</button>
                                    </div>
                                    </div>)
                                }
                            </ul>
                        </div>
             </div>
        )
    }
}

const mapDispatchToProps = {
    selectType,
    addToCart,
};

const mapStateToProps = (state) => {
    return {type: state.type}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);