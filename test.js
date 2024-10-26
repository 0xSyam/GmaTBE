// Include the Socket.IO client library
const io = require('socket.io-client');

// Connect to the Socket.IO server
const socket = io('http://localhost:4000');

// Confirm connection
socket.on('connect', () => {
  console.log('Connected to server');
});

// Listen for the 'FromAPI' event and log the data
socket.on('FromAPI', (data) => {
  console.log('Data received from server:', data);
});

// Handle connection errors
socket.on('connect_error', (error) => {
  console.error('Connection error:', error);
});

// Handle disconnection
socket.on('disconnect', () => {
  console.log('Disconnected from server');
});