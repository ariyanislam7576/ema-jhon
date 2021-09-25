import React, { useEffect, useState } from 'react';
import Cart from './cart/Cart';
import Product from './product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([])
    const [cart,setCart] = useState([])
    const [displayProduct,setDisplayProduct] = useState([])
    useEffect(()=>{
        fetch(`https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON`)
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            setDisplayProduct(data)
        })
    },[])

    const handleCart = product => {

        const newCart = [...cart,product]
        setCart(newCart)
    }
    const handleSearch = event =>{
        const searchText = event.target.value
        const matchProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        setDisplayProduct(matchProduct);
    }
    return (
        <div className='main'>
            <div className='search-btn'>
                <input onChange={handleSearch} 
                type="text" 
                placeholder='search product'/>
            </div>
             <div className='shop-conatiner'>
            <div className='product-container'>
                {
                    displayProduct.map(product => <Product 
                        key={product.key}
                        product={product}
                        handleCart={handleCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                
            <Cart cart={cart}></Cart>
            </div>   
        </div>
        </div>
       
    );
};

export default Shop;