import { ChickenService } from '../services/chickens.service.js';

export class ChickenController {
  static getChickens (req, res) {
    console.log('Controller : getChickens');
    const result = ChickenService.getChickens();
    res.status(200).json(result);
  };

  static getChicken(req, res) {
    console.log(`Controller : getChicken, id: ${req.params.id}`);
    const result = ChickenService.getChicken(req.params.id);
    res.status(200).json(result);
  };

  static createChicken(req, res) {
    console.log('Controller : createChicken');
    const result = ChickenService.createChicken(req.body);
    res.status(200).json(result);
  };

  static updateChicken(req, res) {
    console.log(`Controller : updateChicken, id: ${req.params.id}`);
    const result = ChickenService.updateChicken(req.params.id, req.body);
    res.status(200).json(result);
  };

  static replaceChicken(req, res) {
    console.log(`Controller : replaceChicken, id: ${req.params.id}`);
    const result = ChickenService.replaceChicken(req.params.id, req.body);
    res.status(200).json(result);
  };

  static deleteChicken(req, res) {
    console.log(`Controller : deleteChicken, id: ${req.params.id}`);
    const result = ChickenService.deleteChicken(req.params.id);
    res.status(200).json(result);
  };
};
