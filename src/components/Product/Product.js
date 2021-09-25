import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee ,faShoppingCart} from '@fortawesome/free-solid-svg-icons'

import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props.product)
    const cartIcon=<FontAwesomeIcon icon={faShoppingCart} />
    const{name, seller,stock,img, price,star}=props.product
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
            <h4 className="product-name">{name}</h4> 
           <p><small>by{seller}</small></p>
           <p>${price}</p>
           <p><small>only {stock} left in stock - order soon</small></p>
           <Rating 
           initialRating={star}
           readonly
           emptySymbol="far fa-star icon-color"
           fullSymbol="fas fa-star icon-color "
           ></Rating>
           <br/>
           <button 
           onClick={()=>props.handleAddToCart(props.product)}
            className="btn-regular">{cartIcon}Add to cart </button>
            </div>
           
        </div>
    );
};

export default Product;