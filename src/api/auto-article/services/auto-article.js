'use strict';

/**
 * auto-article service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::auto-article.auto-article');
