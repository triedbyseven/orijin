const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProductSchema = new Schema(
  {
    title: String,
    price: Number,
    inventory: Number,
  },
  { collection: 'products' }
);

ProductSchema.path('price').get(function (num) {
  return (num / 100).toFixed(2);
});

ProductSchema.path('price').set(function (num) {
  return num * 100;
});

global.ProductSchema =
  global.ProductSchema || mongoose.model('Product', ProductSchema);

module.exports = global.ProductSchema;
