import { ApolloServer } from 'apollo-server-micro';
import { getUser } from '../../utils/getUser';

require('../../server/database/config');

//Resolvers
const Query = require('../../server/resolvers/Query');
import Mutation from '../../server/resolvers/Mutation';

// Schema
const { query } = require('../../server/schema/query');
import { mutation } from '../../server/schema/mutation';
const { product } = require('../../server/schema/product');
const { setup } = require('../../server/schema/setup');
const { user } = require('../../server/schema/user');
const { config: globalConfig } = require('../../server/schema/config');

const resolvers = {
  Query,
  Mutation,
};

const apolloServer = new ApolloServer({
  typeDefs: [query, mutation, globalConfig, product, setup, user],
  resolvers,
  context: ({ req }) => {
    // Get the user token from the headers
    const tokenWithBearer = req.headers.authorization || '';
    const token = tokenWithBearer.split(' ')[1];

    // Return user from token
    const user = getUser(token);

    return user;
  }
});

const handler = apolloServer.createHandler({ path: '/api/graphql' });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
