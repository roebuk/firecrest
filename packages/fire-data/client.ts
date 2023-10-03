import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export type Race = (typeof prisma.race)["fields"];
export type Event = (typeof prisma.event)["fields"];
