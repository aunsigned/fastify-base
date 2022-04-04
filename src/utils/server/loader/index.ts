import { FastifyInstance } from 'fastify';

import fastifyAutoload from 'fastify-autoload';
import fastifyBlipp from 'fastify-blipp';
import fastifyCors from 'fastify-cors';
import fastifyHelmet from 'fastify-helmet';

import { join } from 'path';

export default (server: FastifyInstance): void => {
  server.register(fastifyHelmet);

  server.register(fastifyCors, {
    origin: [/^http:\/\/localhost:\d+$/],
    credentials: true,
  });

  server.register(fastifyAutoload, {
    dir: join(__dirname, '../../../routes'),
  });

  server.register(fastifyBlipp);
};
