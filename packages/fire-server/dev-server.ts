import https from "node:https";
import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express, { Request, Response } from "express";
import { json } from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import {
  ExpressMiddlewareOptions,
  expressMiddleware,
} from "@apollo/server/express4";
import { resolvers, typeDefs } from "./src/graphql";

export type MyContext = {
  req: Request;
  res: Response;
};

export type ExpressContext = ExpressMiddlewareOptions<MyContext>;

const options = {
  key: await Bun.file("./dev-certs/key.pem").text(),
  cert: await Bun.file("./dev-certs/cert.pem").text(),
};
const app = express();
const httpServer = https.createServer(options, app);

const corsConfig =
  process.env.NODE_ENV === "production"
    ? {}
    : { origin: "http://localhost:5173", credentials: true };

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
console.log(`🚀 Server ready at https://localhost:4000/graphql`);
