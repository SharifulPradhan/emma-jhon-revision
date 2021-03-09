import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../../fakeData'
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setProducts(data.slice(0,10));
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    const previousCart = productKeys.map(existentKey => {
      const product = data.find( pd => pd.key === existentKey);
      product.quantity = savedCart[existentKey];
      return product;
    })

    setCart(previousCart);
  }, []);

  
  const handleAddProduct = (product) => {
    const toBeAddedKey = product.key;
    const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
    
    let count = 1;
    let newCart;
    if(sameProduct){
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = cart.filter(pd => pd.key !== toBeAddedKey);
      newCart = [...others, sameProduct];
    }
    else{
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);

    addToDatabaseCart(product.key, count);
  }


  return (
    <div className="row">
      <div className="col-8">
        {
          products.map(pd => <Products key={pd.key} products={pd} handleAddProduct = {handleAddProduct} showAddToCart={true}></Products>)
        }
      </div>

      <div className="col-4">
        <Cart cart={cart}>
          <Link to='/review'>
            <Button>Review Your Order</Button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;