import TelegramBot from 'node-telegram-bot-api';
import environment from '../config/environment';

const bot = new TelegramBot(environment.telegramBotToken, {
  polling: true,
});

const AnnaBot = {
  sendMessage: (msg) => {
    return bot.sendMessage(environment.groupChatId, msg);
  },
  addressMessage: (adress) => {
    return bot.sendMessage(environment.groupChatId, '/n' + adress);
  },
};

export default AnnaBot;
