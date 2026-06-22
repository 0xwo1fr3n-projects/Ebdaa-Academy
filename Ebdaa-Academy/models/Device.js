const mongoose = require("mongoose");

const DeviceSchema = new mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  browser: String,

  os: String,

  fingerprint: String,

  approved: {
    type: Boolean,
    default: false
  }

}, {
  timestamps: true
});

module.exports = mongoose.model(
  "Device",
  DeviceSchema
);