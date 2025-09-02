export class ChickenController {
  static getChickens = (req, res) => {
    console.log('Controller : getChickens');
    res.send('okay');
  };

  static getChicken = (req, res) => {
    console.log(`Controller : getChicken, id: ${req.params.id}`);
    res.send('okay');
  };

  static createChicken = (req, res) => {
    console.log('Controller : createChicken');
    res.send('okay');
  };

  static updateChicken = (req, res) => {
    console.log(`Controller : updateChicken, id: ${req.params.id}`);
    res.send('okay');
  };

  static replaceChicken = (req, res) => {
    console.log(`Controller : replaceChicken, id: ${req.params.id}`);
    res.send('okay');
  };

  static deleteChicken = (req, res) => {
    console.log(`Controller : deleteChicken, id: ${req.params.id}`);
    res.send('okay');
  };
};
