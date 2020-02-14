// @ts-check

/**
 * @param {{ where: import('../generated/prisma-client').UserWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const user = async (_, args, context) => {
  console.log("Query.user.args: %j", args);

  const user = await context.prisma.user(args.where);

  console.log("Query.user: %j", user);

  return user;
};

/**
 * @param {{ where: import('../generated/prisma-client').UserWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const users = async (_, args, context) => {
  console.log("Query.user.args: %j", args);

  const user = await context.prisma.users(args);

  console.log("Query.user: %j", user);

  return users;
};

/**
 * @param {{ where: import('../generated/prisma-client').PostWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const posts = async (_, args, context) => {
  console.log("Query.post.args: %j", args);

  const post = await context.prisma.posts(args);

  console.log("Query.post: %j", post);

  return post;
};

// /**
//  * @param {{ where: import('../generated/prisma-client').PostWhereUniqueInput }} args
//  * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
//  * @returns { Promise }
//  */
const post = async (_, args, context) => {
  console.log("Query.post.args: %j", args);

  const post = await context.prisma.posts(args.where);

  console.log("Query.post: %j", post);

  return post;
};

module.exports = { user, users, post, posts };
