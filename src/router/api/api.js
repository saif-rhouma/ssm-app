const { default: mainController } = require('../../app/controllers/mainController');
const { default: authMiddleware } = require('../../app/middleware/authMiddleware');

module.exports = {
  group: {
    prefix: '',
  },
  routes: [
    {
      method: 'get',
      path: '/',
      middleware: [],
      handler: mainController.indexPage,
    },
    {
      method: 'post',
      path: '/',
      middleware: [authMiddleware],
      handler: mainController.notifyAdmin,
    },
  ],
};
