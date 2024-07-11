import { fastify as Fastify, FastifyServerOptions } from 'fastify';
import { POKEMONS, STATS } from './mocks';
import nextjsApp from './nextjs-app';
import { parse } from 'url';

const nextjsHandler = nextjsApp.getRequestHandler();

export default (opts?: FastifyServerOptions) => {
  const fastify = Fastify(opts);

  fastify.get('/_health', async (request, reply) => {
    return { status: 'OK' };
  });

  fastify.get('/api/pokemons', async (request, reply) => {
    return POKEMONS;
  });

  fastify.get('/api/stats', async (request, reply) => {
    return STATS;
  });

  // Path Next.js app is served at.
  const NEXTJS_APP_ROOT = '/nextjs-app';
  fastify.all(`${NEXTJS_APP_ROOT}*`, (request, reply) => {
    // Remove prefix to make URL relative to let Next.js handle request
    // like it was made directly to it.
    const nextjsAppUrl = parse(
      request.url.replace(NEXTJS_APP_ROOT, '') || '/',
      true,
    );

    nextjsHandler(request.raw, reply.raw, nextjsAppUrl).then(() => {
      reply.hijack();
      reply.raw.end();
    });
  });

  // Let Next.js handle its static etc.
  fastify.all('/_next*', (request, reply) => {
    nextjsHandler(request.raw, reply.raw).then(() => {
      reply.hijack();
      reply.raw.end();
    });
  });

  return fastify;
};
