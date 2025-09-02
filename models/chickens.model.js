const data = [
  {
    id: 'a',
    name: 'Chipotle',
    age: 3,
    breed: 'Buff Orpington',
    color: 'orange'
  },
  {
    id: 'b',
    name: 'Mack',
    age: 3,
    breed: 'White Leghorn',
    color: 'white'
  },
  {
    id: 'c',
    name: 'Hornet',
    age: 3,
    breed: 'Speckled Sussex',
    color: 'brown and white speckled'
  },
  {
    id: 'd',
    name: 'Strudel',
    age: 3,
    breed: 'Black Star',
    color: 'black'
  },
];

export class ChickenModel {
  static getChickens = () => {
    console.log('Model : getChickens');
    return data;
  };

  static getChicken = (id) => {
    console.log(`Model : getChicken, id: ${id}`);
    return data.find(chicken => chicken.id === id);
  };

  static createChicken = (chicken) => {
    console.log('Model : createChicken');
    data.push(chicken);
    return chicken;
  };

  static updateChicken = (id, chicken) => {
    // TODO: Implement this logic.
    console.log(`Model : updateChicken, id: ${id}`);
    return({ test: true });
  };

  static replaceChicken = (id, chicken) => {
    console.log(`Model : replaceChicken, id: ${id}`);
    const idx = data.findIndex(chicken => chicken.id === id);
    data.splice(idx, 1);
    data.push(chicken);

    return chicken;
  };

  static deleteChicken = (id) => {
    console.log(`Model : deleteChicken, id: ${id}`);
    
    // TODO : Error handling
    const idx = data.findIndex(chicken => chicken.id === id);
    data.splice(idx, 1);
    return true;
  };
};
