const logger = {
  transport: {
    target: 'pino-pretty',
    options: {
      translateTime: 'HH:MM:ss.l',
      ignore: 'pid,hostname',
    },
  },
};

export default logger;
