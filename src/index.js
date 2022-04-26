const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

users = {}

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('set:user', msg => {
      users[msg._id] = username
      console.log('got set user with payload', msg)
      io.emit('user', {message: `Hello welcome user ${msg.username}`})
  })

  socket.on('get:user', msg => {
      user = users[msg._id]
      console.log('get user with id', msg._id)
      if (user !== undefined) {
        io.emit('user', {username: user, message: 'user found'})
      }else{
          io.emit('user', { message: "User not found!"})
      }
  })
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
