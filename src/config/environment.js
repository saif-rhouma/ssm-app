const environment = {
  nodeEnv: process.env.NODE_ENV || 'production',
  groupChatId: process.env.GROUP_CHAT_ID,
  telegramBotToken: process.env.TELEGRAM_BOT_TOKEN,
  port: process.env.PORT || 5001,
  isDev: process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test' ? false : true,
};

export default environment;
