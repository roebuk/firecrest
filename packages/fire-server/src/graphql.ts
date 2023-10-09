import { Request, Response } from "express";
import { getAllEvents, getEventBySlug } from "fire-data";
import { Resolvers } from "../types";
import { ExpressMiddlewareOptions } from "@apollo/server/express4";

export type MyContext = {
  req: Request;
  res: Response;
};

export type ExpressContext = ExpressMiddlewareOptions<MyContext>;

export const typeDefs = `#graphql
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
    getEventByID(id: ID!): Event
  }

  type Mutation {
    updateEventByID(id: ID!): Event
    login(id: ID!): Event
    logout(id: ID!): Event
  }
`;

export const resolvers: Resolvers = {
  Query: {
    events: getAllEvents,
    getEventBySlug(_parent, { slug }, _context, _info) {
      return getEventBySlug(slug);
    },
    getEventByID(_parent, { id }, _context, _info) {
      return getEventBySlug("lincoln-10k");
    },
  },
  Mutation: {
    updateEventByID(_parent, { id }, _context, _info) {
      return getEventBySlug("lincoln-10k");
    },
    login(_parent, { id }, { res }, _info) {
      res.cookie("token", "2342", {
        maxAge: 14 * 24 * 3600000,
        domain: "localhost",
        path: "/graphql",
        sameSite: "none",
        secure: true,
        httpOnly: true,
      });
      return getEventBySlug("lincoln-10k");
    },
    logout(_parent, { id }, { res }, _info) {
      res.cookie("token", "", {
        maxAge: -(14 * 24 * 3600000),
        domain: "localhost",
        path: "/graphql",
        sameSite: "none",
        secure: true,
        httpOnly: true,
      });
      return getEventBySlug("lincoln-10k");
    },
  },
};
