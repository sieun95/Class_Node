const express = require("express");
const router = express.Router();
const boardContoller = require('./board.controller')

router.get('/list', boardContoller.list)
router.get('/view', boardContoller.view)
router.get('/write', boardContoller.write)
router.get('/update', boardContoller.update)

router.get('/delete', boardContoller.deleteAction)
router.post('/write', boardContoller.writeAction)
router.post('/update', boardContoller.updateAction)


module.exports = router;