import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import todoRouter from "./Router/todoRouter.js";
import cors from "cors";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/todos", todoRouter);
app.get("/", (req, res) => {
  res.send("server started");
});

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on the port http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(`Error connecting to mongodb atlas database`);
  }
};

startServer();
