const Config = require('../database/models/GlobalConfig');
const Product = require('../database/models/Product');
const { hashPassword } = require('../../utils/hashPassword');
const { fullFormSchema } = require('../../utils/formValidation');
const jwt = require('jsonwebtoken');

runSetup = async (_parent, _args, _context) => {
  const { businessName, fullName, username, email, password: unHashedPass } = _args;

  try {

    await fullFormSchema.validate({ companyName: businessName, fullName, email, username, password: unHashedPass }, { abortEarly: false });

    const password = await hashPassword(unHashedPass);

    const newConfig = new Config({
      businessName,
      fullName,
      email,
      username,
      password
    });

    newConfig.save();

    const token = await jwt.sign({ id: newConfig.id, email: newConfig.email }, '123456');

    return { user: newConfig, token };
  } catch (error) {
    console.log(error);
    throw new Error('Run Setup Validation Error.');
  }
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
