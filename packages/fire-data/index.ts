import { prisma } from "./client";

// create a new user
await prisma.race.create({
    data: {
        title: "Lincoln 10k",
        published: false,
    },
});

// count the number of users
const count = await prisma.race.count();
console.log(`There are ${count} users in the database.`);


export const getAllRaces = async () => await prisma.race.findMany() 