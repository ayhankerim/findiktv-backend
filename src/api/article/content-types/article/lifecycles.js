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
