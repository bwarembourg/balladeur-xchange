const app = require('express')();
const http = require('http').Server(app);
const port = process.env.PORT || 3000
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

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>' + port)
})

http.listen(port, () => {

  console.log('listening on *:3000');
});

