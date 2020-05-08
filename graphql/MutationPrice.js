import gql from 'graphql-tag';

export default gql`
  mutation($price: Float) {
    updatePrice(price: $price) {
      id
      price
    }
  }
`;
