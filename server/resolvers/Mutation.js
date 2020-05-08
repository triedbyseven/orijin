const Config = require('../database/models/GlobalConfig');
const Product = require('../database/models/Product');

runSetup = (_parent, _args, _context) => {
  // Creation of collection and documents
  // const newConfig = new Config({ shipping: 4.25, price: 7 });

  const newConfig = new Config({
    businessName: 'Ice Cream Shop',
    fullName: 'Michael Camacho',
  });

  newConfig.save();

  return { success: _args.success };
};

addProduct = async (_parent, _args, _context) => {
  try {
    const response = await Product.create(_args);

    return response;
  } catch (error) {
    console.log(error);
  }
};

updatePrice = async (_parent, _args, _context) => {
  try {
    const { _id: id, price } = await Config.findOneAndUpdate(
      { _id: '5e815e862e2e6a0bfbf96f1d' },
      { price: _args.price },
      { new: true }
    );

    return { id, price };
  } catch (error) {
    return error;
  }
};

module.exports = {
  runSetup,
  addProduct,
  updatePrice,
};
