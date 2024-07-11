import fastify from './fastify-app';
import logger from './logger';
import env from './env';
import nextjsApp from './nextjs-app';

const fastifyApp = fastify({
  logger,
  pluginTimeout: 50000,
  bodyLimit: 15485760,
});

try {
  nextjsApp.prepare().then(() => {
    fastifyApp.listen({ port: env.PORT as number, host: env.HOST });
    fastifyApp.log.info(`Server started on ${env.HOST}:${env.PORT}`);
  });
} catch (err) {
  fastifyApp.log.error(err);
  process.exit(1);
}
