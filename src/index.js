import { GraphQLServer } from "graphql-yoga";
import resolvers from "./resolvers2";
const PORT = process.env.PORT || 4000;
const server = new GraphQLServer({
  port: PORT,
  typeDefs: "src/schema.graphql",
  resolvers
});

server.start(() => console.log(`graphql server Running on port ${PORT}`));
