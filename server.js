import express from "express";

const app = express();

app.use("/home", (req, res) => {
  res.status(200).json("Welcome, your app is working well in server");
});

const PORT = 5300;
app.listen(PORT, () => {
  console.log(`serever is ${PORT}`);
});
