import React from 'react';
import Button from 'react-bootstrap/Button';
const ReviewItems = (props) => {
  const {name, price, seller, stock, quantity, key} = props.products;
  return (
    <div className="ml-3 mb-3 p-3 border border-success rounded" style={{lineHeight:'1rem'}}>
      <div>
        <h4 style={{fontSize:'1rem'}}>{name}</h4>
        <p><small className="text-danger">Seller:</small> {seller}</p>
        <p><small className="text-danger">Price:</small> ${price}</p>
        <p><small className="text-danger">Stock: only</small> {stock} left</p>
        <p><small className="text-danger">Quantity:</small> {quantity}</p>
        <Button className='bg-danger' onClick={() => props.removeProduct(key)}>Remove</Button>
      </div>
    </div>
  );
};

export default ReviewItems;