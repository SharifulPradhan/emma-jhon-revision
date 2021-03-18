import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';
import Button from 'react-bootstrap/Button';
import ConfirmImage from '../../images/giphy.gif';
import { useHistory } from 'react-router';



const Review = () => {
  const [cart, setCart] = useState([]);
  const [confrimOrder, setConfirmOrder] = useState(false);
  const history = useHistory()
  const handleProceedOrder = () => {
    history.push('/shipment');
  }

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


  let confirmImage 
  if(confrimOrder){
    confirmImage = <img src={ConfirmImage} alt=''/>;
  }
  return (
    <div className="row">
      
      <div className="col-8">
        {
        cart.map(pd => <ReviewItems products={pd} key={pd.key} removeProduct = {removeProduct}></ReviewItems> )
        }
        {
          confirmImage 
        }
      </div>

      <div className="col-4">
        <Cart cart={cart}>
          <Button onClick={() => handleProceedOrder()}> Proceed Order </Button>
        </Cart>
      </div>
    </div>
  );
};

export default Review;