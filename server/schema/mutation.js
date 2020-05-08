import { gql } from 'apollo-server-micro';

const mutation = gql`
  type Mutation {
    runSetup(success: Boolean): Setup
    updatePrice(price: Float): Product
    addProduct(title: String, price: Float, inventory: Int): Product
  }
`;

module.exports = {
  mutation,
};
