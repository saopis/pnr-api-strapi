module.exports = ({ env }) => ({
  i18n: true,
  ckeditor: {
    enabled: true,
    resolve: "./src/plugins/strapi-plugin-ckeditor"
  },
  "content-versioning": {
    enabled: true,
  },
  'duplicate-button': true,
  seo: {
    enabled: true,
  },
  menus: {
    config: {
      maxDepth: 3,
    },
  },
  documentation: {
    config: {
      'x-strapi-config': {
        plugins: ['menus', 'upload', 'users-permissions'],
      },
    },
  },
  'drag-drop-content-types': {
    enabled: true
  },
  "soft-delete": {
    enabled: true,
  },
  'import-export-entries': {
    enabled: true,
    config: {
      /**
       * Public hostname of the server.
       *
       * If you use the local provider to persist medias,
       * `serverPublicHostname` should be set to properly export media urls.
       */
      serverPublicHostname: env('PUBLIC_HOSTNAME', `http://localhost:${env.int('PORT', 1337)}`), // default: "".
    },
  },
})
