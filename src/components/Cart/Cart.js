import React from 'react';
import Button from 'react-bootstrap/Button';
const Cart = (props) => {
  const products = props.cart;
  const totalPrice = products.reduce((sum, product) => sum + product.price, 0)
  
  const tax = totalPrice % 10;

  let shipping = 0;
  if (totalPrice === 0){
    shipping = 0;
  }
  else if (totalPrice < 125) {
    shipping = 7.89;
  }
  else if (totalPrice < 205) {
    shipping = 5.29;
  }
  else if (totalPrice > 400) {
    shipping = 0.00;
  }
  
  const totalAmount = (totalPrice + tax + shipping).toFixed(2);
  
  return (
    <div className="border border-primary rounded mt-2 p-3">
      <h1 className="text-center">Your Cart Review</h1>
      <h5>Total Product Added:{products.length}</h5>
      <p>Total Price: {totalPrice.toFixed(2)}</p>
      <p>Tax<small>(10% vat) :</small> {tax.toFixed(2)}</p>
      <p>Shipping Charge: {shipping.toFixed(2)}</p>
      <p>Total Amount: {totalAmount}</p>
      <Button>Review Your Order</Button>
    </div>
  );
};

export default Cart;