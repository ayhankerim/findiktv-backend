module.exports = ({ env }) => [
  'strapi::errors',
  {
    name: "strapi::security",
      config: {
        contentSecurityPolicy: {
          useDefaults: true,
          directives: {
            'connect-src': ["'self'", 'https:'],
            "script-src": [
              "'self'",
              "'unsafe-inline'",
              "'unsafe-eval'",
              "editor.unlayer.com",
              "static.cloudflareinsights.com",
              "www.googletagmanager.com",
              "www.google-analytics.com",
              "findiktv-backend.herokuapp.com",
              "panel.findiktv.com",
              "www.findiktv.com"
            ],
            "frame-src": ["'self'", "editor.unlayer.com", "www.youtube.com", "youtube.com"],
            "img-src": [
              "'self'",
              "data:",
              'blob:',
              "imagedelivery.net",
              "cdn.jsdelivr.net",
              "strapi.io",
              "s3.amazonaws.com",
              "www.google.com.tr",
              "www.google.com",
              "www.google-analytics.com",
            ],
            'media-src': ["'self'", 'data:', 'blob:', 'imagedelivery.net'],
          },
        },
    },
  },
  {
    name: 'strapi::poweredBy',
    config: {
      poweredBy: env('POWEREDBY'),
    },
  },
  {
    name: 'strapi::cors',
    config: {
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['*'],
      origin: ['http://localhost:1337', 'http://localhost:3000', 'http://127.0.0.1:1337', 'http://127.0.0.1:3000', 'https://panel.findiktv.com', 'https://www.findiktv.com'],
      keepHeaderOnError: true,
    },
  },
  'strapi::logger',
  'strapi::query',
  {
    name: "strapi::body",
    config: {
      formLimit: "256mb",
      jsonLimit: "256mb",
      textLimit: "256mb",
      formidable: {
        maxFileSize: 10 * 1024 * 1024,
      },
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
