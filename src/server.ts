import express from 'express';

import routes from './routes';

const app = express();

app.use(express.json());

app.use(routes);

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});

app.post('/courses', (request, response) => {
  const { name } = request.body;

  return response.json({ name });
});

app.listen(3333, () => console.log('Server is running on port 3333!'));
