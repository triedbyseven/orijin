const Config = require('../database/models/GlobalConfig');
const Product = require('../database/models/Product');

getProducts = async (_parent, _args, _context) => {
  try {
    const response = await Product.find();

    return response;
  } catch (err) {
    return err;
  }
};

// getProduct = async (_parent, _args, _context) => {
//   try {
//     const response = await Config.find();

//     if (response.length === 0) throw Error('Collection does not exist.');

//     return response[0];
//   } catch (err) {
//     return err;
//   }
// };

getGlobalConfig = async (_parent, _args, _context) => {
  try {
    const response = await Config.find();

    if (response.length === 0) throw Error('Collection does not exist.');

    return response[0];
  } catch (err) {
    return err;
  }
};

module.exports = {
  getProducts,
  getGlobalConfig,
};
