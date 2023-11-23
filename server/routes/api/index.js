const express = require("express");
const router = express.Router();
const profileRouter = require('./profile')


//APIs
router.use('/profile',profileRouter)

//views (Public)
//router.use(express.static(__dirname + "/public"))

//router.use(express.static(path.join(__dirname, '.../client/dist')))
//router.get(express.static(path.join(__dirname, '.../client/dist')))

module.exports = router;