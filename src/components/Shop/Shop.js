import React, { useEffect, useState } from 'react';
import data from '../../fakeData'
import { addToDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(data.slice(0,10));
  }, []);

  const [cart, setCart] = useState([]);
  const handleAddProduct = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    const sameProduct = newCart.filter (pd => pd.key === product.key);
    const count = sameProduct.length;
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
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;