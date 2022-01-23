const express = require('express');
const attractz = require('../models/attractz')

const router = express.Router();

router.get("/", (req, res) => {
    res.send("hello there");
  });

  // app.get("/attractz", async (req, res) => {
//   try {
//     const db = await connectToDB();
//     const collection = await db.collection("attractz");
//     const attractz = await collection.find({}).toArray();

//     res.json({ attractz });
//   } catch (e) {
//     res.json({ message: e.message });
//   }
// });
  

  module.exports = router