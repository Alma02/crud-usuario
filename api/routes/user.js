'use strict'

var express = require('express');
var UserController = require('../controllers/user');

var api = express.Router();

api.post('/create', UserController.saveUser);
api.get('/allUsers', UserController.getUsers);
api.get('/getUser/:id', UserController.getUserId);
api.put('/update/:id', UserController.updateUser);
api.delete('/delete/:id', UserController.deleteUser);

module.exports = api;
