import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers2";
const PORT = process.env.PORT || 4000;
const server = new GraphQLServer({
  port: PORT,
  typeDefs: "graphql/schema.graphql",
  resolvers
});

server.start(() => console.log(`graphql server Running on port ${PORT}`));
