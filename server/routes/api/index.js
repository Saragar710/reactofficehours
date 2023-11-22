const express = require("express");
const router = express.Router();
const apiRouter = require('./api')


//APIs
router.use('/api',apiRouter)

//views (Public)
//router.use(express.static(__dirname + "/public"))

//router.use(express.static(path.join(__dirname, '.../client/dist')))
router.get(express.static(path.join(__dirname, '.../client/dist')))

module.exports = router;