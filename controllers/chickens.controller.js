import { ChickenService } from '../services/chickens.service.js';

export class ChickenController {
  static getChickens(req, res, next) {
    console.log('Controller : getChickens');
    const result = ChickenService.getChickens();
    res.status(200).json(result);
  }

  static getChicken(req, res) {
    console.log(`Controller : getChicken, id: ${req.params.id}`);
    const result = ChickenService.getChicken(req.params.id);

    if (!result) {
      res.sendStatus(404);
      return;
    }

    res.status(200).json(result);
  }

  static createChicken(req, res) {
    console.log('Controller : createChicken');
    const result = ChickenService.createChicken(req.body);
    res.status(201).json(result);
  }

  static updateChicken(req, res) {
    console.log(`Controller : updateChicken, id: ${req.params.id}`);
    const result = ChickenService.updateChicken(req.params.id, req.body);

    // If truthy - successful
    if (result) {
      res.status(200).json(result);
      return;
    }

    res.sendStatus(404);
  }

  static replaceChicken(req, res) {
    console.log(`Controller : replaceChicken, id: ${req.params.id}`);
    const result = ChickenService.replaceChicken(req.params.id, req.body);

    // If falsy - failed
    if (!result) {
      res.sendStatus(404);
      return;
    }

    res.status(200).json(result);
  }

  static deleteChicken(req, res) {
    console.log(`Controller : deleteChicken, id: ${req.params.id}`);
    ChickenService.deleteChicken(req.params.id);
    res.sendStatus(204);
  }
}
