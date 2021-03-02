const app = require('express')();
const http = require('http').Server(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "https://balladeur.netlify.app/",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  socket.on('playFromStart', (msg) => {
    io.emit('playFromStart', msg);
  });

  socket.on('pause', (msg) => {
    io.emit('pause', msg);
  });
});

http.listen(3000, () => {

  console.log('listening on *:3000');
});

