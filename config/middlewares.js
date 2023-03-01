module.exports = ({ env }) => [
  'strapi::errors',
  {
    name: "strapi::security",
      config: {
        contentSecurityPolicy: {
          useDefaults: true,
          directives: {
            'connect-src': ["'self'", 'https:'],
            "script-src": ["'self'", "editor.unlayer.com"],
            "frame-src": ["'self'", "editor.unlayer.com"],
            "img-src": [
              "'self'",
              "data:",
              'blob:',
              "imagedelivery.net",
              "cdn.jsdelivr.net",
              "strapi.io",
              "s3.amazonaws.com",
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
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      keepHeaderOnError: true,
    },
  },
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
