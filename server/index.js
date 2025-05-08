import dotenv from "dotenv";
dotenv.config();
import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Welcome to the server!",
  });
});

app.listen(process.env.PORT || 5001, (err) => {
  if (err) return console.log(err);
  console.log(`Server is running on port ${process.env.PORT}`);
});
