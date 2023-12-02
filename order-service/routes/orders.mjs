import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// Get a list of 10 orders
router.get("/", async (req, res) => {
  let collection = await db.collection("orders");
  let results = await collection.find({})
    .limit(10)
    .toArray();

  res.send(results).status(200);
});

// Get a single order
router.get("/:id", async (req, res) => {
  let collection = await db.collection("orders");
  let query = { _id: ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});


// Create and Save a new Order
router.post("/", async (req, res) => {
  // Validate request
  if (!req.body.product) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const orderData = {
    product: req.body.product,
    quantity: req.body.quantity,
    state: req.body.state,
    userid: req.body.userid,
    date: new Date(),
  };

  try {
    let collection = await db.collection("orders");

    console.log(orderData)
    // Insert the order using insertOne
    const result = await collection.insertOne(orderData);
    res.send(result).status(200);

  } catch (error) {
    console.error('Error inserting order:', error);
    res.status(400).send({ message: "Error inserting order" });
  }
});

// Delete an entry
router.delete("/:id", async (req, res) => {
  const query = { _id: ObjectId(req.params.id) };

  const collection = db.collection("orders");
  let result = await collection.deleteOne(query);

  res.send(result).status(200);
});

export default router;
