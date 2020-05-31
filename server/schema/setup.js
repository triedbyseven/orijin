import { gql } from 'apollo-server-micro';

const setup = gql`
  type Setup {
    success: Boolean
    businessName: String
    fullName: String
    username: String
    email: String
    password: String
  }
`;

module.exports = {
  setup
};
