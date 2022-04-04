import 'dotenv/config';
import validate from './utils/env';

import Server from './server';

const start = () => {
  try {
    validate();

    const server = new Server(Number(process.env.PORT));
    server.listen();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
