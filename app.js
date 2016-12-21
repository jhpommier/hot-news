import express from "express";
import graphqlHTTP from "express-graphql";
import { buildSchema } from "graphql";
import schema from "./src/server/schema";

const port = process.env.NODE_PORT || 3000;
const env = process.env.NODE_ENV || "development";
const app = express();
const compression = require("compression");

const allowCrossDomain = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST");
    res.header("Access-Control-Allow-Headers", "Content-Type,Cache-Control");
    next();
};

app.use(allowCrossDomain);
app.use(compression());
app.use(express.static(__dirname + '/src/client'));

app.use("/graphql", graphqlHTTP({
    schema: schema,
    graphiql: env !== "production",
}));

app.listen(
    port,
    () => console.log(`Now browse to localhost:${port}/graphql`)
);
