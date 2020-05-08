import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_PRODUCTS } from '../../../graphql';
import { ProductsNav, ProductsTable } from './';

export interface ProductsProps {}

interface ProductsData {
  getProducts: Products[];
}

interface Products {
  id: string;
  title: string;
  price: number;
  inventory: string;
}

const Products: React.SFC<ProductsProps> = () => {
  const { error: productsError, loading: productsLoading, data } = useQuery<ProductsData>(QUERY_PRODUCTS);

  if (productsLoading) return <ProductsNav />;

  return (
    <div className="row align-items-center">
      <ProductsNav />
      <ProductsTable
        products={data.getProducts}
        productsLoading={productsLoading}
        productsError={productsError}
      />
    </div>
  );
};

export default Products;
