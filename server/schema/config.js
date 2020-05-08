import { gql } from 'apollo-server-micro';

const config = gql`
  type Config {
    businessName: String
    fullName: String
  }
`;

module.exports = {
  config,
};
