import React from 'react';

export interface TableProps {
  className: any;
}

const Table: React.SFC<TableProps> = ({ className, children }) => {
  return <table className={`table ${className}`}>{children}</table>;
};

export default Table;
