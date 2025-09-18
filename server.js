import express from 'express';

import { Constants } from './lib/constants.js';
import { mongo } from './lib/mongo.js';
import { ageClassifier } from './middleware/age-classifier.middleware.js';
import { errorHandler } from './middleware/error.middleware.js';
import { chickenRouter } from './routes/chickens.routes.js';
import { feedRouter } from './routes/feed.routes.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api/v1/chickens', ageClassifier);

app.use('/api/v1/chickens', chickenRouter);
app.use('/api/v1/feed', feedRouter);

// Error handler :
app.use(errorHandler);

// TODO: Parameterize this from env config
const mongoOptions = {
  appName: 'ChickensAPI',
  minPoolSize: 2,
  maxPoolSize: 10,
};

await mongo.init(Constants.MONGO_URI, Constants.DATABASE, mongoOptions);

//const result = await mongo.getDb().collection(Constants.CHICKENS_COLLECTIONS).findOne();
//console.log(result);

app.listen(port, () => {
  console.log(`${new Date().toISOString()} : Chicken/Feed API is listening at http://localhost:${port}`);
});
