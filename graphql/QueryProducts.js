import gql from 'graphql-tag';

export default gql`
  query {
    getProducts {
      id
      title
      price
      inventory
    }
  }
`;
