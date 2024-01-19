'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('wechat-auth')
      .service('myService')
      .getWelcomeMessage();
  },
});
