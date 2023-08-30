import logger from '../../utils/logger';
import AnnaBot from '../../utils/telegramBot';
class MainController {
  async indexPage(req, res) {
    res.redirect('/');
  }
  async notifyAdmin(req, res) {
    const { msg } = req.body;
    if (msg) {
      await AnnaBot.sendMessage(msg);
      logger.info('Message Has Been Sended Successfully..');
    }
    res.status(202).json('OKAY');
  }
}

export default new MainController();
