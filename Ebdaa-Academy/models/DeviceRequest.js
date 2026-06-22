const mongoose = require("mongoose");

const DeviceRequestSchema = new mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  deviceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Device"
  },

  status: {
    type: String,
    default: "pending"
  }

}, {
  timestamps: true
});

module.exports = mongoose.model(
  "DeviceRequest",
  DeviceRequestSchema
);