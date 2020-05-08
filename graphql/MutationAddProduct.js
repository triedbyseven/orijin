import gql from 'graphql-tag';

export default gql`
  mutation($title: String, $price: Float, $inventory: Int) {
    addProduct(title: $title, price: $price, inventory: $inventory) {
      id
      title
      price
      inventory
    }
  }
`;
