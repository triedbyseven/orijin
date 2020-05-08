import React from 'react';
import { TableHead, TableHeading } from '../../Ui/Table';

export interface TableHeaderProps {}

const TableHeader: React.SFC<TableHeaderProps> = () => {
  return (
    <TableHead>
      <TableHeading width={75} />
      <TableHeading>Product</TableHeading>
      <TableHeading>Price</TableHeading>
      <TableHeading>Inventory</TableHeading>
    </TableHead>
  );
};

export default TableHeader;
