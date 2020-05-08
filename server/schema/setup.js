import { gql } from 'apollo-server-micro';

const setup = gql`
  type Setup {
    success: Boolean
  }
`;

module.exports = {
  setup
};
