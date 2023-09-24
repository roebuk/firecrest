import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { getAllRaces, getRaceBySlug, createRace } from "fire-data";

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  type Race {
    id: ID!
    published: Boolean!
    title: String!
    slug: String!
  }

  type Query {
    races: [Race!]!
    getRaceBySlug(slug: String!): Race
  }

  type Mutation {
    createRace(title: String!): Race!
  }
`;

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    races: getAllRaces,
    getRaceBySlug(_parent, { slug }, _context, _info) {
      return getRaceBySlug(slug);
    },
  },
  Mutation: {
    createRace: (_, { title }) => createRace(title),
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
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
