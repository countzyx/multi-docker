/* eslint-disable no-console */
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import pg from "pg";
import redis from "redis";
import keys from "./keys.mjs";

// Express
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Postgres
const pgClient = new pg.Pool({
  database: keys.pgDatabase,
  host: keys.pgHost,
  password: keys.pgPassword,
  port: keys.pgPort,
  user: keys.pgUser,
});
pgClient.on("error", () => console.log("Lost PG connection"));

pgClient.query("CREATE TABLE IF NOT EXISTS values (number INT)").catch(err => console.log(err));

// Redis
const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000,
});
const redisPublisher = redisClient.duplicate();

// Express route handlers
app.get("/", (req, res) => {
  res.send("Hi!");
});

app.get("/values/all", async (req, res) => {
  const values = await pgClient.query("SELECT * FROM values");
  res.send(values.rows);
});

app.get("/values/current", async (req, res) => {
  redisClient.hgetall("values", (err, values) => {
    res.send(values);
  });
});

// This disable has to be due to a bug
// eslint-disable-next-line consistent-return
app.post("/values", async (req, res) => {
  const { index } = req.body;
  if (parseInt(index, 10) > 40) {
    return res.status(422).send("Index too high");
  }
  redisClient.hset("values", index, "Nothing yet!");
  redisPublisher.hset("insert", index);
  pgClient.query("INSERT INTO values(number) VALUES($1)", [index]);
  res.send({ working: true });
});

app.listen(5000, err => {
  if (err) {
    console.log(`Error - ${err}`);
  } else {
    console.log("API server listening");
  }
});
