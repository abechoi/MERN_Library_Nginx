require("dotenv").config();
const express = require("express");
const connectToDB = require("./database/db");
const ErrorsMiddleware = require("./middleware/errorMiddleware");
const LibraryError = require("./utils/libraryError");
const bookRoutes = require("./routes/bookRoutes");

process.on("uncaughtException", (error) => {
  console.log("Uncaught Exception: Stopping the server...");
  console.log(error.name, error.message);
  process.exit(1);
});

const app = express();

connectToDB();

// Enable JSON parsing
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Mount and Create Routes
app.get("/test", (req, res) => {
  res.json({
    Hi: "Welcome to the MERN Library API!",
  });
});

app.use("/api/v1/", bookRoutes);

// Error Middleware
app.all("*", (req, res, next) => {
  next(new LibraryError(`Cannot find ${req.originalUrl} on this server.`, 404));
});

app.use(ErrorsMiddleware);

const server = app.listen(PORT, () =>
  console.log(`Mode: ${process.env.NODE_ENV}\nListening to port:${PORT}...`)
);

process.on("unhandledRejection", (error) => {
  console.log("Unhandled Rejection: Stopping the server...");
  console.log(error.name, error.message);
  server.close(() => process.exit(1));
});
