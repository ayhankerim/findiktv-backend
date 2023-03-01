module.exports = ({ env }) => [
  'strapi::errors',
  {
    name: "strapi::security",
      config: {
        contentSecurityPolicy: {
          useDefaults: true,
          directives: {
            'connect-src': ["'self'", 'https:'],
            "script-src": ["'self'", "'unsafe-inline'", "'unsafe-eval'", "editor.unlayer.com", "static.cloudflareinsights.com", "www.googletagmanager.com", "www.google-analytics.com"],
            "frame-src": ["'self'", "editor.unlayer.com"],
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
