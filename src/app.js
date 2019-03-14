import { GraphQLServer } from "graphql-yoga";
import cors from "cors";
import resolvers from "./resolvers2";

const PORT = process.env.PORT || 4000;

class App {
  constructor() {
    this.app = new GraphQLServer({
      port: PORT,
      typeDefs: "src/schema.graphql",
      resolvers
    });
    this.app.express.use(cors());
  }
}
export default new App().app;
