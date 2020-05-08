import React from 'react';

export interface CardProps {}

const Card: React.SFC<CardProps> = ({ children }) => {
  return <div className="card shadow rounded">{children}</div>;
};

export default Card;
