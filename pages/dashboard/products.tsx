import React from 'react';
import { Products as AllProducts } from '../../components/Dashboard/Products';

export interface ProductsProps {
  data: any;
}

const Products: React.SFC<ProductsProps> = ({ data }) => {
  return (
    <div className="col pt-5">
      <div className="container">
        <AllProducts />
      </div>
    </div>
  );
};

export default Products;
