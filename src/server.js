import './config';
import logger from './config/logger';

(async () => {
  try {
    const App = require('./app').default;
    const app = new App();
    app.start();
  } catch (error) {
    logger.info(`Something went wrong when initializing the app ${error} `);
  }
})();
