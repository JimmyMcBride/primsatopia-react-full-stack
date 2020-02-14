const { prisma } = require("../apollo/src/generated/prisma-client");
var faker = require("faker");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function main() {
  // Generate a bunch of random users
  for (var i = 0; i < 1; i++) {
    await prisma.createUser(
      {
        // name: "Jimmy McBride",
        username: "FireNinja"
      },
      {
        // id: "sdfasdfagadfa",
        // name: "Rick Sanchez",
        username: "MadScientist"
        // posts: {
        //   create: [
        //     {
        //       title: "Why I'm Smarter Than You"
        //     },
        //     {
        //       title: "Why You Suck"
        //     }
        //   ]
        // }
      }
    );
    await prisma.createPost({
      title: "First post!"
      // author: {
      //   connect: { username: "FireNinja" }
      // }
    });
    await prisma.createComment({
      text: "This is my first comment!"
      // post: {
      //   connect: {
      //     id: "sdfasdfagadfa"
      //   }
      // },
      // writtenBy: {
      //   connect: {
      //     username: "FireNinja"
      //   }
      // }
    });
  }
}

main().catch(e => console.error(e));
