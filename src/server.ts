import _fastify, { FastifyInstance } from 'fastify';
import { Server as server, IncomingMessage, ServerResponse } from 'http';

import loader from './utils/server/loader';

class Server {
  public fastify: FastifyInstance<server, IncomingMessage, ServerResponse>;
  public port: number;

  constructor(port: number) {
    this.fastify = _fastify({
      trustProxy: true,
    });

    this.port = port;

    loader(this.fastify);
  }

  public async listen() {
    this.fastify.listen(this.port, '0.0.0.0', (error) => {
      if (error) throw error;

      console.log(`[+] Listening on http://localhost:${this.port}/`);
    });
  }
}

export default Server;
