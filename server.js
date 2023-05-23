import express from "express";
import dotenv from "dotenv";

const path = process.env.NODE_ENV ? ".env." + process.env.NODE_ENV : ".env";
dotenv.config({ path: path });

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ name: "first" });
});

app.listen(port, () => console.log(`Listening to port ${port}`));
