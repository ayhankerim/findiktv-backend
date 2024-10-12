module.exports = ({ env }) => {
  return {
    documentation: {
      config: {
        info: {
          version: '1.0.0',
        },
      },
    },
    sentry: {
      enabled: true,
      config: {
        dsn: env('SENTRY_DSN'),
        sendMetadata: true,
      },
    },
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: env('SMTP_HOST', 'smtp.yandex.com.tr'),
          port: env('SMTP_PORT', 587),
          auth: {
            user: env('SMTP_USERNAME'),
            pass: env('SMTP_PASSWORD'),
          },
          secure: false,
          ignoreTLS: false,
          // ... any custom nodemailer options
        },
        settings: {
          defaultFrom: 'info@findiktv.com',
          defaultReplyTo: 'info@findiktv.com',
        },
      },
    },
    upload: {
      config: {
        provider: 'strapi-provider-upload-cloudflare',
        providerOptions: {
          accountId: env('STRAPI_UPLOAD_CLOUDFLARE_ACCOUNT_ID'),
          apiKey: env('STRAPI_UPLOAD_CLOUDFLARE_API_KEY'),
          variant: env('STRAPI_UPLOAD_CLOUDFLARE_VARIANT'),
        },
        sizeLimit: 10 * 1024 * 1024
      },
    }
  };
}
