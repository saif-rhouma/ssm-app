import TelegramBot from 'node-telegram-bot-api';
import environment from '../config/environment';

const bot = new TelegramBot(environment.telegramBotToken, {
  polling: true,
});

const AnnaBot = {
  sendMessage: (msg) => {
    bot.sendMessage(environment.groupChatId, msg);
  },
  addressMessage: (adress) => {
    bot.sendMessage(environment.groupChatId, '/n' + adress);
  },
};

export default AnnaBot;
