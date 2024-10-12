// path: src/extensions/users-permissions/strapi-server.js
module.exports = plugin => {
  const sanitizeOutput = (user) => {
    const {
      password, resetPasswordToken, confirmationToken, ...sanitizedUser
    } = user; // be careful, you need to omit other private attributes yourself
    return sanitizedUser;
  };

  plugin.controllers.user.me = async (ctx) => {
    if (!ctx.state.user) {
      return ctx.unauthorized();
    }
    const user = await strapi.documents('plugin::users-permissions.user').findOne({
      documentId: "__TODO__",
      populate: ['role']
    });

    ctx.body = sanitizeOutput(user);
  };

  plugin.controllers.user.find = async (ctx) => {
    const users = await strapi.documents('plugin::users-permissions.user').findMany({ ...ctx.query, populate: ['role'] });

    ctx.body = users.map(user => sanitizeOutput(user));
  };

  return plugin;
};
