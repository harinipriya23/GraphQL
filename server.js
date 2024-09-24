const path = require("path");
const express = require("express");
// const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { ApolloServer } = require('apollo-server-express')

// const resolversArray = loadFilesSync('**/*', {
//  extensions: ['resolvers.js'],
// })
const typeArray = loadFilesSync(path.join(__dirname, "**/*.graphql"));
const resolversArray = loadFilesSync(path.join(__dirname, "**/*.resolver.js"));

async function startApolloServer() {
 const app = express();

 const schema = makeExecutableSchema({
  typeDefs: typeArray,
  resolvers: resolversArray
 });
 const server = new ApolloServer({
  schema
 })
 await server.start()
 server.applyMiddleware({ app, path: '/graphql' })
 
 app.listen(3000, () => {
  console.log("Running qraphQL server !");
  console.log(resolversArray)
  console.log(typeArray)
 });
 
}

startApolloServer()

// const root = {
//   products: require("./products/products_models"),
//   orders: require("./orders/orders_models"),
// };

// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema: schema,
//     // rootValue: root,
//     graphiql: true,
//   })
// );

