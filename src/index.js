import { GraphQLServer } from "graphql-yoga";
import resolvers from "./resolvers2";

const PORT = process.env.PORT || 4000;
const PLAYGROUND_ENDPOINT = "/playground";
const GRAPHQL_ENDPOINT = "/graphql";

const serverOptions = {
  port: PORT,
  playground: PLAYGROUND_ENDPOINT,
  endpoint: GRAPHQL_ENDPOINT
};
const server = new GraphQLServer({
  port: PORT,
  typeDefs: "src/schema.graphql",
  resolvers
});

server.start(serverOptions, ({ port }) =>
  console.log(`graphql server Running on port ${port}`)
);
