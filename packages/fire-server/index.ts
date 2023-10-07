import http from "node:http";
import { ApolloServer, BaseContext } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import { json } from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import { getAllEvents, getEventBySlug, createRace } from "fire-data";
import { Resolvers } from "./types";
import { expressMiddleware } from "@apollo/server/express4";

const app = express();
const httpServer = http.createServer(app);

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  type Race {
    id: ID!
    price: Int!
    capacity: Int!
    distance: String!
  }

  type Event {
    id: ID!
    title: String!
    published: Boolean!
    slug: String!
    races: [Race!]!
    date: String!
    type: String!
  }

  type Query {
    events: [Event!]!
    getEventBySlug(slug: String!): Event
  }
`;

const resolvers: Resolvers = {
  Query: {
    events: getAllEvents,
    getEventBySlug(_parent, { slug }, _context, _info) {
      return getEventBySlug(slug);
    },
  },
};

const server = new ApolloServer<BaseContext>({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.disable("x-powered-by");

app.use(
  "/graphql",
  cors<cors.CorsRequest>({
    origin: "http://localhost:5173",
    credentials: true,
  }),
  json(),
  cookieParser(),
  expressMiddleware(server)
);

await new Promise<void>((resolve) =>
  httpServer.listen({ port: 4000 }, resolve)
);
console.log(`🚀 Server ready at http://localhost:4000/graphql`);
