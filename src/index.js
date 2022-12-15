const express = require("express");
const app = express();
const cors = require("cors");
const connectDb = require("../config/db");
const shoppingListModel = require("../models/shoppingList.model.js");
require("dotenv").config();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.get("/", async (req, res) => {
  try {
    const shopData = await shoppingListModel.find();
    res.send({ shopData });
  } catch (error) {
    console.log(error);
  }
});

app.post("/shoplist", async (req, res) => {
  const { title, quantity, priority, description } = req.body;
  const date = new Date();
  const tstamps = date.getHours() + "" + ":" + date.getMinutes();
  const shopList = new shoppingListModel({
    title,
    quantity,
    priority,
    timestamps: tstamps,
    description,
  });
  await shopList.save();
  res.send({ shopList });
});

app.listen(PORT, async () => {
  try {
    await connectDb();
    console.log(`Runnig at : http://localhost:${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
