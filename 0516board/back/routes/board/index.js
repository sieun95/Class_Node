const express = require('express');
const router = express.Router();
const boardController = require('./board.controller');

router.get('/list', boardController.list);
router.get('/view', boardController.view);
router.get('/modify', boardController.modify);
router.get('/write', boardController.write);

module.exports = router;