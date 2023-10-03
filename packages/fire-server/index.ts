import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { getAllEvents, getEventBySlug, createRace } from "fire-data";
import { Resolvers } from "./types";

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

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
/** @ts-ignore */
const { url } = await startStandaloneServer<any>(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
