import React from 'react';

export interface CardTitleProps {}

const CardTitle: React.SFC<CardTitleProps> = ({ children }) => {
  return <h5 className="card-title">{children}</h5>;
};

export default CardTitle;
