import gql from 'graphql-tag';

export default gql`
  query {
    getProduct {
      id
      price
    }
  }
`;
