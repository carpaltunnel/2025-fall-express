import express from 'express';

import { chickenRouter } from './routes/chickens.routes.js';
import { feedRouter } from './routes/feed.routes.js';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/v1/chickens', chickenRouter);
app.use('/api/v1/feed', feedRouter);

app.listen(port, () => {
  console.log(`Chicken/Feed API is listening at http://localhost:${port}`);
});
