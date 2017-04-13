const config = {
  test: {
    serverUrl: 'http://localhost:3000/',
  },

  prod: {
    serverUrl: 'http://testing.lainifini.com/',
  },

  dev: {
    serverUrl: 'http://localhost:3000/',
  },

  common: {
    googleAnalyticsTrackingCode: 'UA-92826148-1',
    apiUrl: 'http://elise.srv.lainfini.com:8080/testing/',

    facebookLink: 'https://www.facebook.com/Lainfini.Fashion/',
    instagramLink: 'https://www.instagram.com/lainfini_designhouse/',
    twitterLink: 'https://twitter.com/LainfiniFashion',

    facebookAppId: '1420040611404397',
    facebookAppSecret: '5d70c2ec3c096ba3e8d26c4d4f81d19e',
  },
};

function getConfig() {
  let Config = config.common;

  if (process.env.NODE_ENV === 'production') {
    Config = Object.assign(Config, config.prod);
  } else if (process.env.NODE_ENV === 'development') {
    Config = Object.assign(Config, config.dev);
  } else {
    Config = Object.assign(Config, config.test);
  }

  return Config;
}

export default getConfig();
