
/*
 *
 * ============================================================
 * WARNING: THIS FILE HAS BEEN COMMENTED OUT
 * ============================================================
 *
 * CONTEXT:
 *
 * The lifecycles.js file has been commented out to prevent unintended side effects when starting Strapi 5 for the first time after migrating to the document service.
 *
 * STRAPI 5 introduces a new document service that handles lifecycles differently compared to previous versions. Without migrating your lifecycles to document service middlewares, you may experience issues such as:
 *
 * - `unpublish` actions triggering `delete` lifecycles for every locale with a published entity, which differs from the expected behavior in v4.
 * - `discardDraft` actions triggering both `create` and `delete` lifecycles, leading to potential confusion.
 *
 * MIGRATION GUIDE:
 *
 * For a thorough guide on migrating your lifecycles to document service middlewares, please refer to the following link:
 * [Document Services Middlewares Migration Guide](https://docs.strapi.io/dev-docs/migration/v4-to-v5/breaking-changes/lifecycle-hooks-document-service)
 *
 * IMPORTANT:
 *
 * Simply uncommenting this file without following the migration guide may result in unexpected behavior and inconsistencies. Ensure that you have completed the migration process before re-enabling this file.
 *
 * ============================================================
 */

const OneSignal = require('@onesignal/node-onesignal')
var FB = require('fb');
FB.setAccessToken(process.env.FACEBOOK_TOKEN);

const ONESIGNAL_APP_ID = process.env.ONESIGNAL_APP_ID
const app_key_provider = {
  getToken() {
    return process.env.ONESIGNAL_REST_API_KEY
  }
}
const configuration = OneSignal.createConfiguration({
  authMethods: {
    app_key: {
      tokenProvider: app_key_provider
    }
  }
});
const client = new OneSignal.DefaultApi(configuration);

const SendNotification = async (result, segment) => {
  const notification = new OneSignal.Notification();
  notification.app_id = ONESIGNAL_APP_ID;
  //notification.include_player_ids = ['176c776a-101a-442c-92c3-c13eb7c201c1'];
  notification.included_segments = [segment];
  notification.contents = {
    en: result.title,
    tr: result.title
  };
  notification.web_url = "https://www.findiktv.com/haber/" + result.id + "/" + result.slug
  const { id } = await client.createNotification(notification);
  const entry = await strapi.entityService.update('api::article.article', result.id, {
    data: {
      notification: false,
    },
  });
}

module.exports = {
  afterUpdate(event) {
    const { result, params } = event;
    if (result.notification === true && result.publishedAt) {
      SendNotification(result, process.env.ONESIGNAL_SEGMENT1)
    };
    if (result.share && result.publishedAt) {
      FB.api(
        '/315901728472967/feed',
        'POST',
        {
          "message": result.title,
          "link": "https://www.findiktv.com/haber/" + result.id + "/" + result.slug,
          "published": "true"
        }
      );
    };
  },
  afterCreate(event) {
    const { result, params } = event;
    strapi.db.query('api::view.view').create({
      data: {
        article: result.id,
        view: 0,
      },
    });
  },
};
