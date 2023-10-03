import { prisma } from "./client";
import urlSlug from "url-slug";

const count = await prisma.event.count();
console.log(`There are ${count} events in the database.`);

export const getAllEvents = async () =>
  await prisma.event.findMany({
    where: { published: true },
    include: { races: true },
  });

export const getEventBySlug = async (slug: string) =>
  await prisma.event.findUnique({ where: { slug }, include: { races: true } });

export const createRace = async (title: string) =>
  await prisma.event.create({
    data: {
      title,
      slug: urlSlug(title),
    },
  });
