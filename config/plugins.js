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
    },
    'email-designer': {
      enabled: true,
      config: {
        editor: {
          tools: {
            heading: {
              properties: {
                text: {
                  value: 'This is the new default text!',
                },
              },
            },
          },
          options: {
            features: {
              colorPicker: {
                presets: ['#D9E3F0', '#F47373', '#697689', '#37D67A'],
              },
            },
            fonts: {
              showDefaultFonts: false,
              customFonts: [
                {
                  label: 'Anton',
                  value: "'Anton', sans-serif",
                  url: 'https://fonts.googleapis.com/css?family=Anton',
                },
                {
                  label: 'Lato',
                  value: "'Lato', Tahoma, Verdana, sans-serif",
                  url: 'https://fonts.googleapis.com/css?family=Lato',
                },
              ],
            },
            mergeTags: [
              {
                name: 'CODE',
                value: '{{= validationCode }}',
                sample: 'Kod',
              },
              // ...
            ],
          },
          appearance: {
            theme: 'dark',
            panels: {
              tools: {
                dock: 'left',
              },
            },
          },
        },
      },
    },
    ckeditor: {
      enabled: true,
      config: {
        plugin: {
          // disable data-theme tag setting //
          // setAttribute:false,

          // disable strapi theme, will use default ckeditor theme //
          // strapiTheme:false,

          // styles applied to editor container (global scope) //
          // styles:`
          // :root{
          //   --ck-color-focus-border:red;
          //   --ck-color-text:red;
          // }
          // `
        },
        editor: { // editor default config

          // https://ckeditor.com/docs/ckeditor5/latest/features/markdown.html
          // if you need markdown support and output set: removePlugins: [''],
          // default is
          removePlugins: ['Markdown'],

          // https://ckeditor.com/docs/ckeditor5/latest/features/toolbar/toolbar.html
          toolbar: {
            items: [
              'StrapiMediaLib',
              'paragraph',
              'heading2',
              'heading3',
              '|',
              'bold',
              'italic',
              'underline',
              'fontSize',
              'removeFormat',
              '|',
              'bulletedList',
              'todoList',
              'numberedList',
              '|',
              'alignment',
              'outdent',
              'indent',
              'horizontalLine',
              '|',
              'insertTable',
              'blockQuote',
              'mediaEmbed',
              'link',
              'highlight',
              'sourceEditing',
              'undo',
              'redo',
              '|',
              'code',
              'codeBlock',
              '|',
              'subscript',
              'superscript',
              'strikethrough',
              'specialCharacters',
              '|',
              'heading',
              "fullScreen",
              'fontColor',
              'fontBackgroundColor',
              'fontFamily'
            ]
          },
          // https://ckeditor.com/docs/ckeditor5/latest/features/font.html
          fontSize: {
            options: [
              9,
              11,
              13,
              'default',
              17,
              19,
              21,
              27,
              35,
            ],
            supportAllValues: false
          },
          fontColor: {
            columns: 5,
            documentColors: 10,
          },
          fontBackgroundColor: {
            columns: 5,
            documentColors: 10,
          },
          language: 'tr',
          // https://ckeditor.com/docs/ckeditor5/latest/features/ui-language.html
          // default language: 'en',
          // https://ckeditor.com/docs/ckeditor5/latest/features/images/images-overview.html
          image: {
            resizeUnit: "%",
            resizeOptions: [{
              name: 'resizeImage:original',
              value: null,
              icon: 'original'
            },
            {
              name: 'resizeImage:25',
              value: '25',
              icon: 'small'
            },
            {
              name: 'resizeImage:50',
              value: '50',
              icon: 'medium'
            },
            {
              name: 'resizeImage:75',
              value: '75',
              icon: 'large'
            }],
            toolbar: [
              'toggleImageCaption',
              'imageTextAlternative',
              'imageStyle:inline',
              'imageStyle:block',
              'imageStyle:side',
              'linkImage',
              'resizeImage:25', 'resizeImage:50', 'resizeImage:75', 'resizeImage:original'
            ]
          },
          // https://ckeditor.com/docs/ckeditor5/latest/features/table.html
          table: {
            contentToolbar: [
              'tableColumn',
              'tableRow',
              'mergeTableCells',
              'tableCellProperties',
              'tableProperties',
              'toggleTableCaption'
            ]
          },
          // https://ckeditor.com/docs/ckeditor5/latest/features/headings.html
          heading: {
            options: [
              { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
              { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
              { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
              { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
              { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
            ]
          },
          // https://ckeditor.com/docs/ckeditor5/latest/features/general-html-support.html
          // Regular expressions (/.*/  /^(p|h[2-4])$/' etc) for htmlSupport does not allowed in this config
          htmlSupport: {
            allow: [
              {
                name: /.*/,
                attributes: true,
                classes: true,
                styles: true
              },
            ]
          },
        }
      }
    },
    "rest-cache": {
      config: {
        provider: {
          name: "memory",
          options: {
            max: 32767,
            maxAge: 3600000,
          },
        },
        strategy: {
          contentTypes: [
            // list of Content-Types UID to cache
            "api::category.category",
            "api::price.price",
            "api::article.article",
            "api::page.page",
            "api::global.global",
            "api::tag.tag",
            "api::advertisement.advertisement",
            "api::avatar.avatar",
            "api::city.city",
            "api::comment.comment",
            "api::firm-category.firm-category",
            "api::firm.firm",
            "api::product.product",
            "api::profile-image.profile-image",
            "api::reaction.reaction",
            "api::reaction-type.reaction-type"
          ],
        },
      },
    }
  }
}
