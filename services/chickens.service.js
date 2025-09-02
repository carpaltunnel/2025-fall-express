import { v4 as uuid } from 'uuid';
import { ChickenModel } from '../models/chickens.model.js';

export class ChickenService {
  static getChickens = () => {
    console.log('Service : getChickens');
    return ChickenModel.getChickens();
  };

  static getChicken = (id) => {
    console.log(`Service : getChicken, id: ${id}`);
    return ChickenModel.getChicken(id);
  };

  static createChicken = (chicken) => {
    chicken.id = uuid();
    console.log('Service : createChicken');
    return ChickenModel.createChicken(chicken);
  };

  static updateChicken = (id, chicken) => {
    // Don't let the user overwrite the ID
    chicken.id = id;
    console.log(`Service : updateChicken, id: ${id}`);
    return ChickenModel.updateChicken(id, chicken);
  };

  static replaceChicken = (id, chicken) => {
    // Don't let the user overwrite the ID
    chicken.id = id;
    console.log(`Service : replaceChicken, id: ${id}`);
    return ChickenModel.replaceChicken(id, chicken);
  };

  static deleteChicken = (id) => {
    console.log(`Service : deleteChicken, id: ${id}`);
    return ChickenModel.deleteChicken(id);
  };
};
