import { v4 as uuid } from 'uuid';

import { logger } from '../lib/logger.js';
import { ChickenModel } from '../models/chickens.model.js';

export class ChickenService {
  static getChickens() {
    logger.debug('Service : getChickens');
    return ChickenModel.getChickens();
  }

  static getChicken(id) {
    logger.debug(`Service : getChicken, id: ${id}`);
    return ChickenModel.getChicken(id);
  }

  static createChicken(chicken) {
    const newChicken = {
      ...chicken,
      id: uuid(),
    };

    logger.debug('Service : createChicken');
    return ChickenModel.createChicken(newChicken);
  }

  static updateChicken(id, chicken) {
    // Don't let the user overwrite the ID
    const updateChicken = {
      ...chicken,
      id,
    };
    logger.debug(`Service : updateChicken, id: ${id}`);
    return ChickenModel.updateChicken(id, updateChicken);
  }

  static replaceChicken(id, chicken) {
    // Don't let the user overwrite the ID
    const replaceChicken = {
      ...chicken,
      id,
    };
    logger.debug(`Service : replaceChicken, id: ${id}`);
    return ChickenModel.replaceChicken(id, replaceChicken);
  }

  static deleteChicken(id) {
    logger.debug(`Service : deleteChicken, id: ${id}`);
    return ChickenModel.deleteChicken(id);
  }
}
