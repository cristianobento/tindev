const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes");

const webApp = express();
const server = require("http").Server(webApp);
const io = require("socket.io")(server);

const connectedUsers = {};

io.on("connection", socket => {
  const user = socket.handshake.query.user;
  connectedUsers[user] = socket.id;
});

mongoose.connect(
  "mongodb+srv://omnistack:omnistack@cluster0-n3ezf.mongodb.net/omnistack8?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);

webApp.use((req, res, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;

  return next();
});

webApp.use(cors());
webApp.use(express.json());
webApp.use(routes);
server.listen(3333 || 4000);
