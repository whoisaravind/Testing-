module.exports = {
  siteTitle: 'Chandrika Deb | Software Engineer',
  siteDescription:
    'Chandrika Deb is a Software Engineer at Amdocs, who loves learning new things and helping tech beginners.',
  siteKeywords:
    'Chandrika Deb, Chandrika, Deb, chandrikadeb7, software engineer, face mask, face mask detection, web developer, javascript, girlscript, jamshedpur, amdocs, bit, mesra, deoghar',
  siteUrl: 'https://chandrikadeb7.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: '',
  googleVerification: '',
  name: 'Aravindhan N',
  location: 'Tamil Nadu, India',
  email: 'aravindnk@yahoo.com',
  github: 'https://github.com/whoisaravind',
  twitterHandle: '@whoisaravind',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/whoisaravind',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/aravindnk/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/whoisaravind',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
