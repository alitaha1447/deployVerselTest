import express from "express";

const app = express();

app.get("/home", (req, res) => {
  res.status(200).json("Welcome, your app is working well in server");
});
app.get("/", (req, res) => {
  res.status(200).json("Welcome, TAHA ALI Bhai!");
});

const PORT = 5300;
app.listen(PORT, () => {
  console.log(`serever is ${PORT}`);
});
