import React from 'react';
const Cart = (props) => {
  const products = props.cart;
  const totalPrice = products.reduce((sum, product) => sum + product.price * product.quantity, 0)
  
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
    <div className="border border-primary rounded mt-2 p-3 sticky-top">
      <h1 className="text-center">Your Cart Review</h1>
      <h4>Total Product Added:{products.length}</h4>
      <p>Total Price: {totalPrice.toFixed(2)}</p>
      <p>Tax<small>(10% vat) :</small> {tax.toFixed(2)}</p>
      <p>Shipping Charge: {shipping.toFixed(2)}</p>
      <h4>Total Amount: {totalAmount}</h4>
    </div>
  );
};

export default Cart;