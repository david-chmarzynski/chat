const express = require('express');
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 4000;

// CONFIG DATABASE
require('./database');

// CONFIG SERVER
const app = express();
const server = app.listen(PORT);
module.exports = { app, server };
console.log(`Server running on port ${PORT}`);

// CONFIG SOCKET IO
require('./socket.io');

// CONFIG EXPRESS
app.use(express.json());
app.use(express.static(path.join(__dirname, '../build')));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// CONFIG ROUTER
const router = express.Router();
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "../../build/index.html"));
});