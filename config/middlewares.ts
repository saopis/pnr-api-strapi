export default [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  // {
  //   name: "strapi::security",
  //   config: {
  //     contentSecurityPolicy: {
  //       useDefaults: true,
  //       directives: {
  //         "connect-src": ["'self'", "https:"],
  //         "script-src": ["https://cdnjs.cloudflare.com"],
  //         "media-src": ["https://cdnjs.cloudflare.com"],
  //         "img-src": ["https://cdnjs.cloudflare.com"],
  //       },
  //     },
  //   },
  // },
];
