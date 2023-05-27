import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";
import admin from "firebase-admin";
import serviceAccount from "./serviceAccountKeys.json" assert { type: "json" };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const path = process.env.NODE_ENV ? ".env." + process.env.NODE_ENV : ".env";
dotenv.config({ path });

const app = express();

const port = process.env.PORT || 3000;

app.use(morgan.apply("dev"));
app.use(express.json());
app.use("/api/v1/users", userRoutes);
app.use(errorHandler);

app.listen(port, () => console.log(`Listening to port ${port}`));
