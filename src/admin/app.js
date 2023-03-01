import AuthLogo from './extensions/logo-findiktv.png';
import MenuLogo from './extensions/findiktv-icon.svg';
import favicon from './extensions/findiktv-icon.svg';

export default {
  config: {
    // Replace the Strapi logo in auth (login) views
    auth: {
      logo: AuthLogo,
    },
    // Replace the favicon
    head: {
      favicon: favicon,
    },
    // Add a new locale, other than 'en'
    locales: ['tr'],
    // Replace the Strapi logo in the main navigation
    menu: {
      logo: MenuLogo,
    },
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: { release: true },
  },

  bootstrap() { },
};