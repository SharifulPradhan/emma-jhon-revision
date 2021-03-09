import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';

const Review = () => {
  
  const [cart, setCart] = useState([]);

  const removeProduct = productKey => {
    const newCart = cart.filter(pd => pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  }

  useEffect( () => {
      //Cart
      const savedCart = getDatabaseCart();
      const productKeys = Object.keys(savedCart);
      const cartProducts = productKeys.map(key => {
        const product = fakeData.find(pd => pd.key === key);
        product.quantity = savedCart[key];
        return product;
      });
      setCart(cartProducts);
  }, []);

  return (
    <div className="row">
      
      <div className="col-8">
        {
        cart.map(pd => <ReviewItems products={pd} key={pd.key} removeProduct = {removeProduct}></ReviewItems> )
        }
      </div>

      <div className="col-4">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Review;