import React from 'react';
import Rating from 'react-rating';
import './Product.css'

const Product = (props) => {
    // console.log(props);
    const {name,seller,price,stock,img,star} = props.product
    return (
        <div className='product'>
            <div className='product-img'>
                 <img src={img} alt="" />
            </div>
            <div className="product-info">
                <h3>{name}</h3>
                <p>by:{seller}</p>
                <p>price ${price} </p>
                <p>stock {stock} </p>
                <br />
                <p><Rating
                readonly
                initialRating={star}
                fullSymbol='fas fa-star'
                emptySymbol="far fa-star"
                ></Rating></p>
                <button
                 onClick={()=>props.handleCart(props.product)}
                >add to cart</button>
            </div>
        </div>
    );
};

export default Product;