import http from "node:http";
import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express, { Request, Response } from "express";
import { json } from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import { getAllEvents, getEventBySlug } from "fire-data";
import { Resolvers } from "./types";
import {
  ExpressMiddlewareOptions,
  expressMiddleware,
} from "@apollo/server/express4";

export type MyContext = {
  req: Request;
  res: Response;
};

export type ExpressContext = ExpressMiddlewareOptions<MyContext>;

const app = express();
const httpServer = http.createServer(app);

const corsConfig =
  process.env.NODE_ENV === "production"
    ? {}
    : { origin: "http://localhost:5173", credentials: true };

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

const server = new ApolloServer<ExpressContext>({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.disable("x-powered-by");

app.use(
  "/graphql",
  cors<cors.CorsRequest>(corsConfig),
  json(),
  cookieParser(),
  expressMiddleware(server, {
    context: async ({ req, res }) => ({
      req,
      res,
    }),
  })
);

await new Promise<void>((resolve) =>
  httpServer.listen({ port: 4000 }, resolve)
);
console.log(`🚀 Server ready at http://localhost:4000/graphql`);
