import { MongoClient } from 'mongodb';

import { logger } from './logger.js';

class Mongo {
  db = '';

  init = async (uri, database, connectionOptions) => {
    const client = new MongoClient(uri, connectionOptions);
    // TODO: Try/Catch
    await client.connect();
    logger.info(`Connected to Mongo @ ${uri}`);
    this.db = client.db(database);
    logger.info(`Selected Mongo database named : ${database}`);
  }

  getDb = () => {
    return this.db;
  }
}

export const mongo = new Mongo();