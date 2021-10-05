import express from 'express';

export const app = express();
export function init () {
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
