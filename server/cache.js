import { createClient } from 'redis';

(async () => {
  const socket = {
    host: process.env.CACHE_HOST,
    port: process.env.CACHE_PORT
  };
  const client = createClient({
    socket
  });

  client.on('error', (err) => console.log('Redis Client Error', err));

  await client.connect();

  await client.set('key', 'value');
  const value = await client.get('key');
  console.log({ value });
})();
