import express from 'express';
import runAsyncWrapper from '../utils/runAsyncWrapper';
import apiRoutes from './api';
class Router {
  constructor() {
    this.router = express.Router();
    this.apiRoutes = apiRoutes;
  }
  create(app) {
    // TODO : attach middleware
    this._attachApiRoutes();
    this._handlePageNotFound();
    this._handleExceptions();
    app.use(this.router);
  }

  _handlePageNotFound() {
    this.router.all('*', async (req, res) => {
      res.redirect('/');
    });
  }

  _handleExceptions() {
    // eslint-disable-next-line no-unused-vars
    this.router.use((err, req, res, next) => {
      err.statusCode = err.status || err.statusCode || 500;
      return res.status(err.statusCode).send(err.message);
    });
  }

  _attachApiRoutes() {
    this._attachRoutes(this.apiRoutes, '/api');
  }

  _attachRoutes(routeGroups, prefix = '') {
    routeGroups.forEach(({ group, routes }) => {
      routes.forEach(({ method, path, middleware = [], handler }) => {
        this.router[method](
          prefix + group.prefix + path,
          [...(group.middleware || []), ...middleware],
          runAsyncWrapper(handler)
        );
      });
    });
  }
}

export default new Router();
