const express = require('express');
const router = express.Router();
const userInfoController = require('./userInfo.controller');

router.get('/get', userInfoController.get);

