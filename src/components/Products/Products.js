import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Products = (props) => {
  const {img, name, category, seller, stock, price, key} = props.products;

  return (
    <div className="ml-5 mt-2 row border border-success rounded" style={{lineHeight:'1rem'}}>
      <div className="container col-4">
        <img className="img-fluid" src={img} alt=""/>
      </div>
      <div className="container col-8">
        <h4 style={{fontSize:'1rem'}}><Link to={'/product/' + key}>{name}</Link></h4>
        <p><small className="text-danger">Category:</small> {category}</p>
        <p><small className="text-danger">Seller:</small> {seller}</p>
        <p><small className="text-danger">Stock: only</small> {stock} left</p>
        <p><small className="text-danger">Price:</small> ${price}</p>
        {props.showAddToCart && <Button className="mb-2" onClick={() => props.handleAddProduct(props.products)}><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Add to Cart</Button>}
      </div>
    </div>
  );
};

export default Products;