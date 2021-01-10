const User = require('../models/user.model');

// FIND USER BY USERNAME
exports.findUserByUsername = (username) => {
  return User.findOne({ "username": username }).exec();
};

// SET USER ONLINE
exports.setOnline = (id) => {
  return User.findOneAndUpdate({ "_id": id }, {$set: { isOnline: true }}).exec();
};

// SET USER OFFLINE
exports.setOffline = (id) => {
  return User.findOneAndUpdate({ "_id": id }, {$set: { isOnline: false }}).exec();
};

// SET USER AUTHENTICATED
exports.setAuth = (id) => {
  return User.findOneAndUpdate({ "_id": id }, {$set: { isAuthenticated: true }}).exec();
};

// SET USER UNAUTHENTICATED
exports.setUnAuth = (id) => {
  return User.findOneAndUpdate({ "_id": id }, {$set: { isAuthenticated: false }}).exec();
};

// SET USER'S SOCKET ID
exports.setSocketId = (username, id) => {
  return User.findOneAndUpdate({ "username": username }, {$set: { socket_id: id }}).exec();
};

// FIND USER BY SOCKET ID
exports.findUserBySocketId = (id) => {
  return User.findOne({ "socket_id": id }).exec();
};