const mongoose = require('mongoose');

const flowSchema = new mongoose.Schema({
  status: { type: String, default: 'Started' },
  log: [{ type: String }],
});

module.exports = mongoose.model('Flow', flowSchema);
