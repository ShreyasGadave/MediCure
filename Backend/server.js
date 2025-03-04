import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectColudinary from "./config/cloudinary.js";


const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectColudinary();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(port, () => console.log("Server Started", port));
