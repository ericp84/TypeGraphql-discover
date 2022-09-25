"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const { graphqlHTTP } = require("express-graphql");
const app = (0, express_1.default)();
const port = 3000;
const { buildSchema } = require("graphql");
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);
const rootValue = { hello: () => "Hello world!" };
app.use("/", graphqlHTTP({
    schema: schema,
    rootValue: rootValue,
    graphiql: true,
}));
app.listen(port, () => {
    console.log("connecté sur le port : ", port);
});
