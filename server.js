import express from "express";

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ name: "first" });
});

app.listen(port, () => console.log(`Listening to port ${port}`));
