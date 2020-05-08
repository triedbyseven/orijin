import { gql } from 'apollo-server-micro';

const product = gql`
  type Product {
    id: ID
    title: String
    price: Float
    inventory: Int
  }
`;

module.exports = {
  product,
};
