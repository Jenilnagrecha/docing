const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const app = express();
const DB =
  "mongodb+srv://nagrechajenil:WeMi59QThUzVFApM@cluster0.fysgzcq.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(DB)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
