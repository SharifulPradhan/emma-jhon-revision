import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Products from '../Products/Products';

const ProductDetails = () => {
  const {productKey} = useParams();
  const product = fakeData.find(fd => fd.key === productKey);
  return (
    <div>
      <Products showAddToCart={false} products={product}></Products>
    </div>
  );
};

export default ProductDetails;