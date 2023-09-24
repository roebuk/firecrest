import { prisma } from "./client";
import urlSlug from "url-slug";

const count = await prisma.race.count();
console.log(`There are ${count} users in the database.`);

export const getAllRaces = async () =>
  await prisma.race.findMany({ where: { published: true } });

export const getRaceBySlug = async (slug: string) =>
  await prisma.race.findUnique({ where: { slug } });

export const createRace = async (title: string) =>
  await prisma.race.create({
    data: {
      title,
      slug: urlSlug(title),
    },
  });
