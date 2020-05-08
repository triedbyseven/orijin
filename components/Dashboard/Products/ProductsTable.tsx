import React from 'react';
import { Table } from '../../Ui/Table';
import TableHeader from './TableHeader';
import TableContent from './TableContent';

export interface ProductsTableProps {
  products: Products[];
  productsLoading: boolean;
  productsError: any;
}

interface Products {
  id: string;
  title: string;
  price: number;
  inventory: string;
}

const ProductsTable: React.SFC<ProductsTableProps> = ({ products, productsLoading, productsError }) => {
  return (
    <div className="col-12 minHeight">
      <Table className="table-borderless mb-4">
        <TableHeader />
        <TableContent products={products} productsLoading={productsLoading} productsError={productsError} />
      </Table>
    </div>
  );
};

export default ProductsTable;
