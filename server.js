//importing necessary files
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const compression = require("compression");
const apiRoutes = require("./routes/api.js");

const PORT = process.env.PORT || 3001;
app.use(logger("dev"));
const app = express();

// express compression

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const mongoUri =
  process.env.MONGODB_URI || "mongodb://localhost:27017/budget2022";
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(apiRoutes);

app.listen(PORT, () => {
  console.log(`App currently running  successfully on port ${PORT}!`);
});
