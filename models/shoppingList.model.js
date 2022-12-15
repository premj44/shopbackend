const mongoose = require("mongoose");

const shoppingListSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    quantity: { type: Number, required: true },
    priority: { type: String, required: true },
    date: { type: Date, default: Date.now() },
    timestamps: { type: String },
    description: { type: String, required: true },
    
  },
  {
    timestamps: true,
  }
);

const shoplistModel = mongoose.model("shoppinglist", shoppingListSchema);

module.exports = shoplistModel;
