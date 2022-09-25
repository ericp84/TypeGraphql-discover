import express, { Request, Response } from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

const app = express();
const port = 3000;

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const rootValue = { hello: () => "Hello world!" };

app.use(
  "/",
  graphqlHTTP({
    schema: schema,
    rootValue: rootValue,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log("connecté sur le port : ", port);
});
