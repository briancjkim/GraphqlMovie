import { GraphQLServer } from "graphql-yoga";
import resolvers from "./resolvers2";
import cors from "cors";
import app from "./app";

const PORT = process.env.PORT || 4000;
const PLAYGROUND_ENDPOINT = "/playground";
const GRAPHQL_ENDPOINT = "/graphql";

const appOptions = {
  port: PORT,
  playground: PLAYGROUND_ENDPOINT,
  endpoint: GRAPHQL_ENDPOINT
};

app.start(appOptions, () =>
  console.log(`graphql server Running on port ${PORT}`)
);
