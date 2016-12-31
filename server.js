import express from 'express';
import { apolloServer } from 'apollo-server';
import schema from './data/schema.js';
import Mocks from './data/mocks';
import Resolvers from './data/resolvers';
const GRAPHQL_PORT = 8080;

const graphQLServer = express();
graphQLServer.use('/', apolloServer({
  graphiql: true,
  pretty: true,
  schema,
  resolvers: Resolvers
  // mocks: Mocks,
}));
graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/`
));
