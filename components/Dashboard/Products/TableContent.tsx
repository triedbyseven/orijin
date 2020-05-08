import React from 'react';
import ProductTableRow from './ProductsTableRow';
import { TableBody } from '../../Ui/Table';

export interface TableContentProps {
  products: Products[];
  productsLoading: boolean;
  productsError: any;
}

export interface Products {
  id: string;
  title: string;
  price: number;
  inventory: string;
}

const TableContent: React.SFC<TableContentProps> = ({ products, productsLoading, productsError }) => {
  if (productsLoading) return <h3>Loading...</h3>;

  return (
    <TableBody>
      {products.map((product) => (
        <ProductTableRow key={product.id} {...product} />
      ))}
    </TableBody>
  );
};

export default TableContent;
