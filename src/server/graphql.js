import express from "express";
import graphqlHTTP from "express-graphql";
import { buildSchema } from "graphql";
import schema from "./schema";

const port = process.env.NODE_PORT || 3000;
const env = process.env.NODE_ENV || "development";
const app = express();

app.use("/graphql", graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

app.listen(
    port,
    () => console.log(`Now browse to localhost:${port}/graphql`)
);
