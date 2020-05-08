import { gql } from 'apollo-server-micro';

// Query Schema
const query = gql`
  type Query {
    getProducts: [Product]
    getGlobalConfig: Config
  }
`;

module.exports = {
  query,
};
