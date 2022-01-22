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

  const client = await MongoClient.connect(process.env.DATABASE_STR, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tls: true,
    tlsCAFile: `${__dirname}/ca-certificate.crt`,
  });

  const db = client.db("attractz");

  cachedClient = client;
  cachedDB = db;

  return db;
};

app.get("/", (req, res) => {
  res.send("hello there");
});

app.get("/attractz", async (req, res) => {
  try {
    const db = await connectToDB();
    const collection = await db.collection("attractz");
    const attractz = await collection.find({}).toArray();

    res.json({ attractz });
  } catch (e) {
    res.json({ message: e.message });
  }
});

app.listen(port, () => {
  console.log("app is running on port", port);
});
