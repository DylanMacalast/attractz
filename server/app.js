require("dotenv").config();
const express = require("express");
const mongodb = require("mongodb");

const app = express();
const MongoClient = mongodb.MongoClient;
const port = process.env.PORT || 3000;

let cachedClient = null;
let cachedDB = null;

const connectToDB = async () => {
  if (cachedDB) return cachedDB;

  const client = await MongoClient.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tls: true,
    tlsCAFile: "./ca-certificate.crt",
  });

  const db = client.db("attractz");

  cachedClient = client;
  cachedDB = db;

  return db;
};

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/attractz", async (req, res) => {
  const db = await connectToDB();
  const collection = await db.collection("attractz");
  const attractz = await collection.find({}).toArray();

  res.json({ attractz });
});

app.listen(port, () => {
  console.log("app is running on port", port);
});
