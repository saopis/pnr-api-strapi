module.exports=({env})=>({
  i18n: true,
  ckeditor:{
    enabled:true,
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

})
