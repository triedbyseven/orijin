const mongoose = require('mongoose');

const { Schema } = mongoose;

const globalConfigSchema = new Schema(
  {
    businessName: String,
    fullName: String,
  },
  { collection: 'global_config' }
);

global.globalConfigSchema =
  global.globalConfigSchema || mongoose.model('Config', globalConfigSchema);

module.exports = global.globalConfigSchema;
