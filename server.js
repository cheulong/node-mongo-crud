import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";

const path = process.env.NODE_ENV ? ".env." + process.env.NODE_ENV : ".env";
dotenv.config({ path });

const app = express();

const port = process.env.PORT || 3000;

app.use("/api/v1/users", userRoutes);

app.listen(port, () => console.log(`Listening to port ${port}`));
