const express = require("express");
const router = express.Router;


const mockProfile = {
    name: "Bootcamp",
    viewCount:600
}
//Get
router.get("/", (req, res) => {
    res.json(mockProfile)
})

router.post("/", (req, res) =>{
    res.json(mockProfile)
})

module.exports = router;