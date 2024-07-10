import { fastify as Fastify, FastifyServerOptions } from 'fastify';
import { POKEMONS, STATS } from './mocks';

export default (opts?: FastifyServerOptions) => {
  const fastify = Fastify(opts);

  fastify.get('/api/pokemons', async (request, reply) => {
    return POKEMONS;
  });

  fastify.get('/api/stats', async (request, reply) => {
    return STATS;
  });

  return fastify;
};
