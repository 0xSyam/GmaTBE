const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors'); // Import cors

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = 8000;

// Use cors middleware
app.use(cors());

io.on('connection', (socket) => {
  console.log('New client connected');

  // Emit data every second
  setInterval(() => {
    const data = {
      time: new Date().toISOString(),
      latitude: Math.random() * 90,
      longitude: Math.random() * 180,
      voltage: Math.random() * 20,
      pressure: Math.random() * 100,
      altitude: Math.random() * 10000
    };
    socket.emit('FromAPI', data);
  }, 1000);

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
