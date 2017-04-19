// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';
import appSagas from 'containers/App/sagas';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars
  injectSagas(appSagas);

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/HomePage/reducer'),
          System.import('containers/HomePage/sagas'),
          System.import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('homepage', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/designers',
      name: 'designers',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Designers'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/profile',
      name: 'profile',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Profile/reducer'),
          System.import('containers/Profile/sagas'),
          System.import('containers/Profile'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('profile', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/studio',
      name: 'studio',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Studio'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/catalog',
      name: 'eshop',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Eshop/reducer'),
          System.import('containers/Eshop/sagas'),
          System.import('containers/Eshop'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('eshop', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/catalog/:productId',
      name: 'productDetail',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/ProductDetail/reducer'),
          System.import('containers/ProductDetail/sagas'),
          System.import('containers/ProductDetail'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('productDetail', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/basket',
      name: 'basket',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Basket'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/order',
      name: 'order',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Order/reducer'),
          System.import('containers/Order/sagas'),
          System.import('containers/Order'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('order', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/order/shipping-and-payment',
      name: 'order',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/ShippingAndPayment/reducer'),
          System.import('containers/ShippingAndPayment/sagas'),
          System.import('containers/ShippingAndPayment'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('ShippingAndPayment', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/order/pay/card',
      name: 'payByStripe',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/ShippingAndPayment/sagas'),
          System.import('containers/ShippingAndPayment/stripe'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([sagas, component]) => {
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/templates/:template',
      name: 'templates',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/templates'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/login(/**)',
      name: 'login-register',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/User/reducer'),
          System.import('containers/User/sagas'),
          System.import('containers/User'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('user', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/wishlist',
      name: 'wishlist',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Wishlist'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/faq',
      name: 'faq',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Faq/reducer'),
          System.import('containers/Faq/sagas'),
          System.import('containers/Faq'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('faq', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/email-verification/:token',
      name: 'emailVerification',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/EmailVerification/sagas'),
          System.import('containers/EmailVerification'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([sagas, component]) => {
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/customer',
      name: 'customer',
      getComponent(nextState, cb) {
        System.import('containers/Customer')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/server-down',
      name: 'serverDown',
      getComponent(nextState, cb) {
        System.import('containers/ServerDown')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/terms-of-service',
      name: 'termsOfService',
      getComponent(nextState, cb) {
        System.import('containers/TermsOfService')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/about-cookies',
      name: 'aboutCookies',
      getComponent(nextState, cb) {
        System.import('containers/AboutCookies')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/logout',
      name: 'logout',
      getComponent(nextState, cb) {
        System.import('containers/Logout')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        System.import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
