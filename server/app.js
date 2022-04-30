require("dotenv").config();
const express = require("express");
const mongodb = require("mongodb");
const path = require("path");

const app = express();
const MongoClient = mongodb.MongoClient;
const port = process.env.PORT || 3000;

// START the app
app.use(express.static(path.join(__dirname, "../client/", "dist")));

let cachedClient = null;
let cachedDB = null;

// const connectToDB = async () => {
//   if (cachedDB) return cachedDB;

//   const client = await MongoClient.connect(process.env.DATABASE_STR, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     tls: true,
//     tlsCAFile: `${__dirname}/ca-certificate.crt`,
//   });

//   const db = client.db("attractz");

//   cachedClient = client;
//   cachedDB = db;

//   return db;
// };

// app.get("/attractz", async (req, res) => {
//   try {
//     const db = await connectToDB();
//     const collection = await db.collection("attractz");
//     const attractz = await collection.find({}).toArray();
//     // console.log(attractz)

//     res.json({ attractz });
//   } catch (e) {
//     res.json({ message: e.message });
//   }
// });

// app.get("/attractz/:id", async (req, res) => {
//   try {
//     const db = await connectToDB();
//     const collection = await db.collection("attractz");
//     // console.log(db.collection("attractz"))
//     const attractzId = await collection.findOne({
//       _id: attractzId("61ec1691f8b34cc378b1e118"),
//     });

//     res.json({ attractzId });
//   } catch (error) {
//     res.json({ message: error.message });
//   }
// });

// app.post("/attractz", async (req, res) => {
//   try {
//     const db = await connectToDB();
//     const collection = await db.collection("attractz");

//     const attractz = await collection.insertOne({
//       name: "test",
//       rules: [
//         {
//           id: 2,
//           title: "cals rule",
//         },
//       ],
//       hotspots: [
//         {
//           id: 2,
//           title: "hotspot cal",
//         },
//       ],
//     });
//     res.json(attractz);
//   } catch (error) {
//     res.json({ message: error.message });
//   }
// });

app.listen(port, () => {
  console.log("app is running on port", port);
});
