require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/test", (req, res) => {
  res.json({
    Hi: "Welcome to the MERN Library API!",
  });
});

app.listen(PORT, () =>
  console.log(`Mode: ${process.env.NODE_ENV}\nListening to port:${PORT}...`)
);
