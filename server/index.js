import express from 'express';

import './cache';

export const app = express();
export function init() {
  try {
    const { username, host, dbname, password, port } = JSON.parse(process.env.DEMOCLUSTER_SECRET);
    console.log({ username, host, dbname, password, port });
  } catch (err) {
    console.log('err', JSON.stringify(err));
  }

  app.use(express.urlencoded({ extended: true }));
  app.get('/', (req, res) => {
    console.log('Health check api called');
    res.json({ data: 'Service up and running!' });
  });

  if (process.env.NODE_ENV !== 'test') {
    app.listen(9000);
  }
}
init();
