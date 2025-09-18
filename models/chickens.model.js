import { mongo } from '../lib/mongo.js';
import { Constants } from '../lib/constants.js'

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
    console.log('ChickenModel : getChickens()');
    return mongo.getDb().collection(Constants.CHICKENS_COLLECTIONS).find({}, {
      projection: {
        _id: 0,
      },
    });
  }

  static getChicken(id) {
    console.log(`Model : getChicken, id: ${id}`);
    return mongo.getDb().collection(Constants.CHICKENS_COLLECTIONS).findOne({ id }, {
      projection: {
        _id: 0,
      },
    });
  }

  static async createChicken(chicken) {
    console.log('Model : createChicken');
    await mongo.getDb().collection(Constants.CHICKENS_COLLECTIONS).insertOne(chicken);
    // eslint-disable-next-line no-underscore-dangle, no-param-reassign
    delete chicken._id;
    return chicken;
  }

  static async updateChicken(id, chicken) {
    console.log(`Model : updateChicken, id: ${id}`);

    const updateStatement = {
      $set: {},
    };

    Object.keys(chicken).forEach((key) => {
      if (key === 'id') { // TODO: Constants
        return;
      }

      updateStatement.$set[key] = chicken[key];
    });

    // TODO: try/catch
    // TODO: FindOneAndUpdate, return full chicken doc
    const result = await mongo.getDb().collection(Constants.CHICKENS_COLLECTIONS).updateOne(
      { id },
      updateStatement,
    );
    

    // TODO: RETURN FULL CHICKEN DOCUMENT (findOneAndUpdate())

    if (result.matchedCount) {
      return true;
    }

    return false;
  }

  // TODO: Implement this.
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

  static async deleteChicken(id) {
    console.log(`Model : deleteChicken, id: ${id}`);
    const result = await mongo.getDb().collection(Constants.CHICKENS_COLLECTIONS)
      .deleteOne({ id });
    

    console.log(result);

    if (result.deletedCount) {
      return true;
    }

    return false;
  }
}
