const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const routes = require("./routes");
const server = express();

mongoose.connect(
  "mongodb+srv://omnistack:omnistack@cluster0-n3ezf.mongodb.net/omnistack8?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);

server.use(cors());
server.use(express.json());
server.use(routes);
server.listen(3333 || 4000);
