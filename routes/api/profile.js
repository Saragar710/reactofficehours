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
    const newProfile = req.body;
    newProfile.id = "465416253749dfsf";
    res.json(mockProfile)
})

module.exports = router;