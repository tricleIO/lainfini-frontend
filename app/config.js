const config = {
  test: {
    serverUrl: 'http://localhost:3000/',
    apiUrl: 'http://elise.srv.lainfini.com:8080/testing/',
    googleAnalyticsTrackingCode: 'UA-92826148-1',
  },

  prod: {
    serverUrl: 'http://testing.lainifini.com/',
    apiUrl: 'http://elise.srv.lainfini.com:8080/testing/',
    googleAnalyticsTrackingCode: 'UA-92826148-1',
  },

  dev: {
    serverUrl: 'http://localhost:3000/',
    apiUrl: 'http://elise.srv.lainfini.com:8080/testing/',
    googleAnalyticsTrackingCode: 'UA-92826148-1',
  },
};

function getConfig() {
  if (process.env.NODE_ENV === 'production') {
    return config.prod;
  }

  if (process.env.NODE_ENV === 'test') {
    return config.test;
  }

  if (process.env.NODE_ENV === 'development') {
    return config.dev;
  }

  return config.test;
}

export default getConfig();
