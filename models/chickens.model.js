const data = [
  {
    id: 'a',
    name: 'Chipotle',
    age: 3,
    breed: 'Buff Orpington',
    color: 'orange',
  },
  {
    id: 'b',
    name: 'Mack',
    age: 3,
    breed: 'White Leghorn',
    color: 'white',
  },
  {
    id: 'c',
    name: 'Hornet',
    age: 3,
    breed: 'Speckled Sussex',
    color: 'brown and white speckled',
  },
  {
    id: 'd',
    name: 'Strudel',
    age: 3,
    breed: 'Black Star',
    color: 'black',
  },
];

export class ChickenModel {
  static getChickens() {
    console.log('Model : getChickens');
    return data;
  }

  static getChicken(id) {
    console.log(`Model : getChicken, id: ${id}`);
    return data.find((chicken) => chicken.id === id);
  }

  static createChicken(chicken) {
    console.log('Model : createChicken');
    data.push(chicken);
    return chicken;
  }

  static updateChicken(id, chicken) {
    console.log(`Model : updateChicken, id: ${id}`);

    // eslint-disable-next-line no-shadow
    const idx = data.findIndex((chicken) => chicken.id === id);

    if (idx < 0) {
      return false;
    }

    // for(const key of Object.keys(chicken)) {
    Object.keys(chicken).forEach((key) => {
      if (key === 'id') { // TODO: Constants
        return;
      }

      data[idx][key] = chicken[key];
    });

    return data[idx];
  }

  static replaceChicken(id, chicken) {
    console.log(`Model : replaceChicken, id: ${id}`);

    // eslint-disable-next-line no-shadow
    const idx = data.findIndex((chicken) => chicken.id === id);

    if (idx < 0) {
      return false;
    }

    data.splice(idx, 1);
    data.push(chicken);

    return chicken;
  }

  static deleteChicken(id) {
    console.log(`Model : deleteChicken, id: ${id}`);
    const idx = data.findIndex((chicken) => chicken.id === id);

    // If it doesn't, consider that a success.
    if (idx === -1) {
      return true;
    }

    data.splice(idx, 1);
    return true;
  }
}
