import express from 'express';
import chalk from 'chalk';
import environment from './config/environment';
import helmet from 'helmet';
import cors from 'cors';
import logger from 'morgan';
import Router from './router';
import path from 'path';

class App {
  constructor() {
    this.app = express();
    // eslint-disable-next-line no-unused-vars
    this.app.use(logger('dev', { skip: (req, res) => environment.nodeEnv === 'test' }));
    this.app.use(express.static(path.join(__dirname, 'views')));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(helmet());
    this.app.use(
      cors({
        credentials: true,
        origin: ['*'],
        methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH', 'OPTIONS'],
      })
    );
  }

  start() {
    this._setupRoutes();
    this._listen();
  }

  _setupRoutes() {
    // TODO : Setup routes
    Router.create(this.app);
  }

  _listen() {
    const { port, nodeEnv } = environment;
    this.app.listen(port, () => {
      console.log(
        chalk.cyanBright.inverse(
          `Server is running on port : ${port}! | Execution Environment : ${nodeEnv.toLocaleUpperCase()}`
        )
      );
    });
  }
}

export default App;
